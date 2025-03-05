# Converting Resume Templates to a WordPress Plugin

This document outlines the process of converting our React-based resume templates application into a WordPress plugin using the WordPress REST API.

## Table of Contents

1. [Plugin Structure](#plugin-structure)
2. [Main Plugin File](#main-plugin-file)
3. [React Integration](#react-integration)
4. [REST API Endpoints](#rest-api-endpoints)
5. [Admin Interface](#admin-interface)
6. [Shortcodes](#shortcodes)
7. [Block Editor Integration](#block-editor-integration)
8. [Data Storage](#data-storage)
9. [Deployment](#deployment)

## Plugin Structure

```
resume-templates/
├── assets/
│   ├── css/
│   │   └── build/
│   ├── js/
│   │   └── build/
│   └── images/
├── includes/
│   ├── class-resume-templates.php
│   ├── class-resume-rest-controller.php
│   ├── class-resume-shortcodes.php
│   └── class-resume-admin.php
├── templates/
│   └── admin-page.php
├── resume-templates.php
└── readme.txt
```

## Main Plugin File

```php
<?php
/**
 * Plugin Name: Resume Templates
 * Description: Professional resume templates with multiple styles and professions
 * Version: 1.0.0
 * Author: Your Name
 * Text Domain: resume-templates
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('RESUME_TEMPLATES_PATH', plugin_dir_path(__FILE__));
define('RESUME_TEMPLATES_URL', plugin_dir_url(__FILE__));
define('RESUME_TEMPLATES_VERSION', '1.0.0');

// Include required files
require_once RESUME_TEMPLATES_PATH . 'includes/class-resume-templates.php';
require_once RESUME_TEMPLATES_PATH . 'includes/class-resume-rest-controller.php';
require_once RESUME_TEMPLATES_PATH . 'includes/class-resume-shortcodes.php';
require_once RESUME_TEMPLATES_PATH . 'includes/class-resume-admin.php';

// Initialize the plugin
function resume_templates_init() {
    $plugin = new Resume_Templates();
    $plugin->init();
}
add_action('plugins_loaded', 'resume_templates_init');
```

## React Integration

### 1. Build Process Setup

Create a webpack configuration to build the React app for WordPress:

```js
// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    admin: './src/admin.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets/js/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../css/build/[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
};
```

### 2. Modify React Entry Point

```jsx
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  const resumeContainers = document.querySelectorAll('.resume-templates-container');
  
  resumeContainers.forEach(container => {
    const template = container.dataset.template || 'default';
    const style = container.dataset.style || '';
    
    ReactDOM.render(
      <App template={template} style={style} />,
      container
    );
  });
});
```

### 3. Adapt App Component

```jsx
// src/App.jsx
import React, { useState, useEffect } from 'react';
import ResumeTemplate from './components/ResumeTemplate';
import ResumeTemplateMinimal from './components/ResumeTemplateMinimal';
// Import other templates...

const App = ({ template = 'default', style = '' }) => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${resumeTemplatesData.restUrl}/templates/${template}`,
          {
            headers: {
              'X-WP-Nonce': resumeTemplatesData.nonce
            }
          }
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch resume data');
        }
        
        const data = await response.json();
        setResumeData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [template]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!resumeData) return <div className="no-data">No resume data found</div>;

  // Render the appropriate template based on style and template props
  const renderTemplate = () => {
    if (style) {
      switch (style) {
        case 'minimal':
          return <ResumeTemplateMinimal {...resumeData} />;
        case 'modern':
          return <ResumeTemplateModern {...resumeData} />;
        case 'creative':
          return <ResumeTemplateCreative {...resumeData} />;
        default:
          return <ResumeTemplate {...resumeData} />;
      }
    }

    // Otherwise use the standard template for this profession
    switch (template) {
      case 'minimal':
        return <ResumeTemplateMinimal {...resumeData} />;
      case 'modern':
        return <ResumeTemplateModern {...resumeData} />;
      case 'creative':
        return <ResumeTemplateCreative {...resumeData} />;
      case 'developer':
        return <ResumeDeveloper {...resumeData} />;
      case 'marketing':
        return <ResumeMarketing {...resumeData} />;
      // Other cases...
      default:
        return <ResumeTemplate {...resumeData} />;
    }
  };

  return (
    <div className="resume-templates-app">
      {renderTemplate()}
    </div>
  );
};

export default App;
```

## REST API Endpoints

### 1. REST Controller Class

```php
<?php
// includes/class-resume-rest-controller.php

class Resume_REST_Controller {
    private $namespace = 'resume-templates/v1';

    public function register_routes() {
        register_rest_route($this->namespace, '/templates', [
            'methods' => 'GET',
            'callback' => [$this, 'get_templates'],
            'permission_callback' => '__return_true',
        ]);

        register_rest_route($this->namespace, '/templates/(?P<template>[\w-]+)', [
            'methods' => 'GET',
            'callback' => [$this, 'get_template_data'],
            'permission_callback' => '__return_true',
            'args' => [
                'template' => [
                    'required' => true,
                    'sanitize_callback' => 'sanitize_text_field',
                ],
            ],
        ]);

        // Admin-only endpoints (with permission check)
        register_rest_route($this->namespace, '/templates/(?P<template>[\w-]+)', [
            'methods' => 'POST',
            'callback' => [$this, 'update_template_data'],
            'permission_callback' => [$this, 'admin_permissions_check'],
            'args' => [
                'template' => [
                    'required' => true,
                    'sanitize_callback' => 'sanitize_text_field',
                ],
            ],
        ]);
    }

    public function admin_permissions_check() {
        return current_user_can('manage_options');
    }

    public function get_templates() {
        $templates = [
            ['id' => 'default', 'name' => 'Classic'],
            ['id' => 'minimal', 'name' => 'Minimal'],
            ['id' => 'modern', 'name' => 'Modern'],
            ['id' => 'creative', 'name' => 'Creative'],
            ['id' => 'developer', 'name' => 'Developer'],
            ['id' => 'marketing', 'name' => 'Marketing'],
            ['id' => 'finance', 'name' => 'Finance'],
            ['id' => 'healthcare', 'name' => 'Healthcare'],
            ['id' => 'education', 'name' => 'Education'],
            ['id' => 'creative-design', 'name' => 'Creative Design'],
            ['id' => 'hospitality', 'name' => 'Hospitality'],
        ];

        return rest_ensure_response($templates);
    }

    public function get_template_data($request) {
        $template = $request->get_param('template');
        
        // Get template data from custom post type or options
        $template_data = get_option('resume_template_' . $template);
        
        if (!$template_data) {
            // Return default data for this template
            $template_data = $this->get_default_template_data($template);
        }
        
        return rest_ensure_response($template_data);
    }

    public function update_template_data($request) {
        $template = $request->get_param('template');
        $data = $request->get_json_params();
        
        // Validate and sanitize data
        $sanitized_data = $this->sanitize_template_data($data);
        
        // Save to options table
        update_option('resume_template_' . $template, $sanitized_data);
        
        return rest_ensure_response([
            'success' => true,
            'message' => 'Template data updated successfully',
        ]);
    }

    private function sanitize_template_data($data) {
        // Implement sanitization logic here
        return $data; // Placeholder
    }

    private function get_default_template_data($template) {
        // Return default data based on template type
        switch ($template) {
            case 'developer':
                return [
                    'name' => 'Alex Chen',
                    'title' => 'Senior Full Stack Developer',
                    // Other developer template data...
                ];
            case 'marketing':
                return [
                    'name' => 'Sarah Johnson',
                    'title' => 'Digital Marketing Strategist',
                    // Other marketing template data...
                ];
            // Other cases...
            default:
                return [
                    'name' => 'Alex Morgan',
                    'title' => 'Professional Photographer',
                    // Other default template data...
                ];
        }
    }
}
```

## Admin Interface

### 1. Admin Class

```php
<?php
// includes/class-resume-admin.php

class Resume_Admin {
    public function init() {
        add_action('admin_menu', [$this, 'register_admin_menu']);
        add_action('admin_enqueue_scripts', [$this, 'enqueue_admin_assets']);
    }

    public function register_admin_menu() {
        add_menu_page(
            __('Resume Templates', 'resume-templates'),
            __('Resume Templates', 'resume-templates'),
            'manage_options',
            'resume-templates',
            [$this, 'render_admin_page'],
            'dashicons-id',
            30
        );
        
        add_submenu_page(
            'resume-templates',
            __('Settings', 'resume-templates'),
            __('Settings', 'resume-templates'),
            'manage_options',
            'resume-templates-settings',
            [$this, 'render_settings_page']
        );
    }

    public function enqueue_admin_assets($hook) {
        if ('toplevel_page_resume-templates' !== $hook && 'resume-templates_page_resume-templates-settings' !== $hook) {
            return;
        }

        wp_enqueue_script(
            'resume-templates-admin',
            RESUME_TEMPLATES_URL . 'assets/js/build/admin.js',
            ['wp-element', 'wp-components', 'wp-api-fetch'],
            RESUME_TEMPLATES_VERSION,
            true
        );

        wp_enqueue_style(
            'resume-templates-admin-styles',
            RESUME_TEMPLATES_URL . 'assets/css/build/admin.css',
            [],
            RESUME_TEMPLATES_VERSION
        );

        wp_localize_script('resume-templates-admin', 'resumeTemplatesData', [
            'restUrl' => rest_url('resume-templates/v1'),
            'nonce' => wp_create_nonce('wp_rest'),
        ]);
    }

    public function render_admin_page() {
        include RESUME_TEMPLATES_PATH . 'templates/admin-page.php';
    }

    public function render_settings_page() {
        echo '<div id="resume-templates-settings"></div>';
    }
}
```

### 2. Admin React Component

```jsx
// src/admin.js
import React from 'react';
import ReactDOM from 'react-dom';
import AdminApp from './AdminApp';

document.addEventListener('DOMContentLoaded', () => {
  const adminContainer = document.getElementById('resume-templates-admin');
  const settingsContainer = document.getElementById('resume-templates-settings');
  
  if (adminContainer) {
    ReactDOM.render(<AdminApp />, adminContainer);
  }
  
  if (settingsContainer) {
    ReactDOM.render(<AdminSettings />, settingsContainer);
  }
});
```

## Shortcodes

```php
<?php
// includes/class-resume-shortcodes.php

class Resume_Shortcodes {
    public function init() {
        add_shortcode('resume_template', [$this, 'resume_template_shortcode']);
    }

    public function resume_template_shortcode($atts) {
        $attributes = shortcode_atts([
            'template' => 'default',
            'style' => '',
        ], $atts);
        
        // Enqueue React scripts and styles
        wp_enqueue_script('resume-templates-app');
        wp_enqueue_style('resume-templates-styles');
        
        // Return container for React to mount
        return sprintf(
            '<div class="resume-templates-container" data-template="%s" data-style="%s"></div>',
            esc_attr($attributes['template']),
            esc_attr($attributes['style'])
        );
    }
}
```

## Block Editor Integration

### 1. Register Block

```js
// src/blocks/resume-template/index.js
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

registerBlockType('resume-templates/resume', {
  title: __('Resume Template', 'resume-templates'),
  icon: 'id',
  category: 'widgets',
  attributes: {
    template: {
      type: 'string',
      default: 'default'
    },
    style: {
      type: 'string',
      default: ''
    }
  },
  edit: ({ attributes, setAttributes }) => {
    const { template, style } = attributes;
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      apiFetch({ path: '/resume-templates/v1/templates' })
        .then(data => {
          setTemplates(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching templates:', error);
          setLoading(false);
        });
    }, []);

    const templateOptions = templates.map(t => ({
      label: t.name,
      value: t.id
    }));

    const styleOptions = [
      { label: __('Default', 'resume-templates'), value: '' },
      { label: __('Minimal', 'resume-templates'), value: 'minimal' },
      { label: __('Modern', 'resume-templates'), value: 'modern' },
      { label: __('Creative', 'resume-templates'), value: 'creative' }
    ];

    return (
      <>
        <InspectorControls>
          <PanelBody title={__('Resume Template Settings', 'resume-templates')}>
            <SelectControl
              label={__('Template', 'resume-templates')}
              value={template}
              options={templateOptions}
              onChange={value => setAttributes({ template: value })}
            />
            <SelectControl
              label={__('Style', 'resume-templates')}
              value={style}
              options={styleOptions}
              onChange={value => setAttributes({ style: value })}
            />
          </PanelBody>
        </InspectorControls>
        <div className="wp-block-resume-templates-resume">
          {loading ? (
            <p>{__('Loading templates...', 'resume-templates')}</p>
          ) : (
            <div className="resume-preview">
              <p>{__('Resume Template:', 'resume-templates')} {template}</p>
              {style && <p>{__('Style:', 'resume-templates')} {style}</p>}
              <p className="description">{__('Resume will be displayed here on the frontend.', 'resume-templates')}</p>
            </div>
          )}
        </div>
      </>
    );
  },
  save: () => {
    // Return null to use PHP rendering
    return null;
  }
});
```

### 2. PHP Render Callback

```php
function resume_templates_block_render($attributes) {
    $shortcode = sprintf(
        '[resume_template template="%s" style="%s"]',
        esc_attr($attributes['template'] ?? 'default'),
        esc_attr($attributes['style'] ?? '')
    );
    
    return do_shortcode($shortcode);
}

register_block_type('resume-templates/resume', [
    'editor_script' => 'resume-templates-block-editor',
    'editor_style' => 'resume-templates-block-editor-style',
    'render_callback' => 'resume_templates_block_render',
    'attributes' => [
        'template' => [
            'type' => 'string',
            'default' => 'default',
        ],
        'style' => [
            'type' => 'string',
            'default' => '',
        ],
    ],
]);
```

## Data Storage

### Option 1: WordPress Options API

Store resume data in the WordPress options table:

```php
// Save template data
update_option('resume_template_developer', $developer_data);

// Get template data
$data = get_option('resume_template_developer', $default_data);
```

### Option 2: Custom Post Type

Create a custom post type for resume templates:

```php
function register_resume_template_post_type() {
    register_post_type('resume_template', [
        'labels' => [
            'name' => __('Resume Templates', 'resume-templates'),
            'singular_name' => __('Resume Template', 'resume-templates'),
        ],
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => 'resume-templates',
        'supports' => ['title', 'custom-fields'],
        'has_archive' => false,
    ]);
}
add_action('init', 'register_resume_template_post_type');
```

## Deployment

### 1. Build Process

```json
// package.json
{
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development --watch"
  }
}
```

### 2. Plugin Activation/Deactivation

```php
// Activation hook
register_activation_hook(__FILE__, 'resume_templates_activate');
function resume_templates_activate() {
    // Initialize default data
    if (!get_option('resume_template_default')) {
        update_option('resume_template_default', get_default_template_data('default'));
    }
    
    // Flush rewrite rules if using custom post types
    flush_rewrite_rules();
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'resume_templates_deactivate');
function resume_templates_deactivate() {
    // Clean up if needed
    flush_rewrite_rules();
}
```

### 3. Localization

```php
function resume_templates_load_textdomain() {
    load_plugin_textdomain('resume-templates', false, dirname(plugin_basename(__FILE__)) . '/languages');
}
add_action('plugins_loaded', 'resume_templates_load_textdomain');
```

## Usage Examples

### Shortcode Usage

```
[resume_template template="developer" style="modern"]
[resume_template template="marketing" style="minimal"]
```

### Block Editor Usage

Users can add the Resume Template block from the block inserter and configure it using the block settings panel.

### Programmatic Usage

```php
echo do_shortcode('[resume_template template="finance"]');
```
