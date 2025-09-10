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


## Further Development
The Guide encourages debate and ideas about best styling practice, 
including topics such as-:

### Style Hierarchy
* Core (AKA Style Guide) - styles defined at an organisational level.
* Project -styles defined at an project level.
* Theme - A project may have for example a light theme and a dark theme.


What utility classes are genuinely common place? 

In the style cascade (
Cascade is the 'C' in CSS) how "detailed" should styles be
defined at the hierarchy levels? "Detailing" in the sense 
of CSS precedence. e.g. the selector
`header h1.primary` has a higher precedence than the selector `header h1`.

### Media Types
Styling can be applied to different media-:
* Screen 
* Print
* Voice

### Media Responsiveness
The style handling of different devices, different screen sizes say.

How should images be handled if the device screen width changes say?
Does the image remain static? Does it stretch?

Breakpoints - what breakpoints are covered? Where in the style hierarchy
are they applied?

### Uncoupling
How best to make CSS artifacts independent, or uncoupled.
Uncoupling is good because it promotes easy re-use, and hence
less repetition, less maintenance. Duplicated styles are
undesirable because they increase code size, and increase 
the maintenance burden.

How do we switch between different themes?

### HTML elements
What elements should be used? What elements should not be used (
e.g. deprecated elements, archaic elements

Custom elements are now common (e.g. Components in a JavaScript framework).
What is best practice to apply styles to custom elements?


### Animation 
Commonly referred to as `transitions`. 
What properties can and should be animated? How long
should it take say for a popup to fade or decrease in 
height to vanish.



## References
SASS documentation [https://sass-lang.com/documentation/]()

CSS properties  [https://developer.mozilla.org/en-US/docs/Web/CSS/Properties]()

tiny-grid   [https://github.com/alexerlandsson/tiny-grid]()

Media Queries   [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries]()

Transitions [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions]())