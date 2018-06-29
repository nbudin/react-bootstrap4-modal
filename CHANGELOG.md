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
