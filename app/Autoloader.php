<?php

foreach (glob(__DIR__ . "/*/*.php") as $filename) {
    if (file_exists($filename)) {
        require_once $filename;
    }
}