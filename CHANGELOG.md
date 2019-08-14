# 1.7.4 - August 14, 2019

* Avoid more setState on umounted component warnings

# 1.7.3 - August 14, 2019

* Avoid setState on umounted component warnings

# 1.7.2 - June 19, 2019

* Use componentDidMount rather than componentWillMount, which is deprecated (thanks @bbonamin!)

# 1.7.1 - May 21, 2019

* Fixed TypeScript definitions to use React's MouseEvent rather than the browser native one (thanks again @nikeee!)

# 1.7.0 - October 31, 2018

* SPOOOOOKY Halloween release!
* Adds an optional `fade` prop to allow disabling the fade in/out animation (thanks @paulodeon!)
* oooOOOOOOooooo

# 1.6.2 - October 19, 2018

* Fixes to make the 1.6.1 changes take effect in the built package (thanks again @nikeee!)

# 1.6.1 - October 2, 2018

* Add TypeScript definitions (thanks @nikeee!)
* Ignore the src directory in the built package (thanks again @nikeee!)

# 1.6.0 - October 1, 2018

* Add `okText` and `cancelText` props to `ConfirmModal` to allow customization and i18n (thanks @nikeee!)

# 1.5.0 - September 18, 2018

* Use a `setTimeout` to make sure the animations on fade-in actually work on Chrome/Firefox (thanks @nikeee!)

# 1.4.0 - June 29, 2018

* Allow for stacked modals by setting `zIndex` based on number of modals currently showing (thanks @paulodeon!)
* Don't break if there is no `document` (such as in test environments)

# 1.3.0 - April 28, 2018

* Add `disableButtons` prop to `ConfirmModal`

# 1.2.2 - January 30, 2018

* Fix another build issue that was causing yarn to install multiple copies of React in node_modules

# 1.2.1 (YANKED) - January 30, 2018

* Fix a build issue that was preventing the 1.2.0 features from actually working in the npm package

# 1.2.0 - January 24, 2018

* Add the ability to pass additional class names and props into the modal, its dialog, and its wrapper (thanks @Fi1osof!)

# 1.1.2 - December 18, 2017

* Add and remove the modal-open class from body when modals appear and disappear

# 1.1.1 - August 14, 2017

* Add a click handler on the modal div to make onClickBackdrop work correctly

# 1.1.0 - July 15, 2017

* Add ConfirmModal

# 1.0.0 - July 14, 2017

* Initial release
