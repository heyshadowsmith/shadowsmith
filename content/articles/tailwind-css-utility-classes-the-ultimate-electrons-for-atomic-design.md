---
title: Tailwind CSS Utility Classes | The ultimate electrons for Atomic Design
description: Shadow Smith's thoughts regarding Tailwind's rightful place in Atomic Design methodology
createdAt: 2021-11-05
---

![Tailwind CSS Utility Class as Electron](/img/tailwind-css-utility-classes-the-ultimate-electrons-for-atomic-design/tailwind-css-utility-class-electron.png "Tailwind CSS Utility Class as Electron")
<br>
<hr>
<br>

In this article, I'm going to explain how I believe styles, but more specifically [Tailwind](https://tailwindcss.com/)'s generated CSS utility classes, can fit into [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) methodology if we extend Brad Frost's initial analogy by adding electrons.

But in order to begin, we need to get on the same page real quick with a handful of prerequisite definitions.

**Design system**<br>
A design system is a complete set of standards created to manage design and development at scale using consistent visual patterns and reusable UI components.

**UI component**<br>
A UI component is a reusable user interface building block used to enforce a consistent visual pattern and user experience.

**UI component library**<br>
A UI component library is a centralized collection of UI components used to enforce a consistent visual pattern and user experience across many projects and teams at scale.

**Atomic Design**<br>
Atomic Design is a methodology created by Brad Frost that suggests that highly effective design systems follow a structure similar to that of Chemistry where entities of a design system grow in complexity from atoms, to molecules, organisms, templates, and finally pages.
<br>
<br>
<hr>
<br>

## Style as electrons to atoms
In Chemistry, electrons are found in shells that surround the nucleus of an atom and influence the overall shape of the atom. In addition, the electrons in the outer-most shell are responsible for creating the chemical bonds that join atoms together to form larger molecules and compounds.

The visual treatment added to a design system's atom directly influences its shape, and styles are also responsible for the arrangement, or joining, of atoms in larger molecule and organism components.

Therefore, styles as electrons to atoms in a design system feels like an acceptable extension of the Atomic Design methodology.
<br>
<br>
<hr>
<br>

## Why Tailwind's CSS utility classes are the ultimate electrons
This is where the electrons analogy gets really specific to how styles are added to HTML elements in the browser using CSS.

CSS is a complex, ever-evolving, rule-based language that is used to specify groups of styles that should be applied to particular elements or groups of elements, but with all of the specificity and inheritance issues, cross browser compatibility, media queries, multiple stylesheets, bloated files, class naming conventions, and CSS preprocessor flavors, writing and maintaining CSS at scale can be an absolute nightmare.

Tailwind solves all of the pain I previously mentioned by generating low-level CSS utility classes based on a, what I like to call a "Design-System-as-Code", `tailwind.config.js` configuration file.

I consider Tailwind utilities classes as the ultimate electrons because, unlike arbitrary, inconsistent, human-made CSS classes, Tailwind utility classes are generated using a customizable computer process derived from an intimate coupling with the small, stylistic attributes of your design system.

So with all of this said, I believe that determining as many of the "smaller than atom level" visual attributes of your design system (like spacing scales, colors, fonts, font sizes, font weights, and more) before creating atomic components will substantially increase the probability that everything built with your design system will be visually consistent, flexible, and easy to update over time.
