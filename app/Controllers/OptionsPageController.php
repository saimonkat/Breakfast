<?php

class OptionsPageController
{
    public function __construct()
    {
        add_action('init', [$this, 'optionsPageInit']);
    }

    public function optionsPageInit()
    {
        acf_add_options_page(array(
            'page_title' => 'Theme Settings',
            'menu_title' => 'Theme Settings',
            'menu_slug'  => 'theme-settings',
            'capability' => 'edit_posts',
            'redirect'   => false
        ));
    }
}

new OptionsPageController();