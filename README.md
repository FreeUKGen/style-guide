# FreeBMD style guide

The style guide documents the core styling which is intended to be 
the canonical style resource which will be shared 
across a number of web-based FreeBMD projects.

Initially the style guide will be applied to the 
FreeComETT REG UX work circa late 2025.


## General
* The CSS pre-processor is SASS, and the syntax mode is `.scss`,
which is the curly brace style used by CSS itself.
* Style properties will be indented by the `TAB` character,
and not spaces.
* Key Custom properties (AKA CSS variables)  will be defined 
in the root pseudo-class, and elsewhere as needed.
* Case used to separate style name words is kebab-case e.g. `$primary-reg-col`.

#### Words for variable names-:

    reg   FreeREG
    cen   FreeCEN 
    bmp   FreeBMP
    col   colour 
    back  background
    nav   navbar


## Grid System
The grid system will be 12 column width, and uses tiny-grid, which is a simple
SCSS grid framework. Benefits of tiny-grid:

* Uses the same basic syntax as Bootstrap - easy to integrate into bootstrap projects.
* Light-weight (4kb minified)
* Can easily be customised.


## Examples
#### Indentation (`TAB`)
    nav {
        height: 44px; 
        color: $reg-nav-col;
        width: 100%;
    }

#### CSS Properties

    :root {
        --primary-col: #00857e;     # Primary colour
        --primary-reg-col: #00857e; # Primary FreeREG colour
        --primary-back: #e6f6e5;    # Primary background
        --primary-accent-col: #517481;
        --primary-accent-font-col
    }


## References
SASS documentation [https://sass-lang.com/documentation/]()

CSS properties  [https://developer.mozilla.org/en-US/docs/Web/CSS/Properties]()

tiny-grid   [https://github.com/alexerlandsson/tiny-grid]()