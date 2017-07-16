# react-bootstrap4-modal

A really simple implementation of Bootstrap 4 modal dialogs for React

## Usage

```jsx
import React from 'react';
import Modal from 'react-bootstrap4-modal';

class Spacecraft extends React.Component {
  // event handling methods go here

  render() {
    <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
      <div className="modal-header">
        <h5 className="modal-title">Red Alert!</h5>
      </div>
      <div className="modal-body">
        <p>Enemy vessel approaching!</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={this.onPanic}>
          Panic
        </button>
        <button type="button" className="btn btn-primary" onClick={this.onFirePhasers}>
          Fire phasers
        </button>
      </div>
    </Modal>
  }
}
```

With react-bootstrap4-modal, you're responsible for rendering all the inner content of the modal dialog.  react-bootstrap4-modal simply provides the logic for rendering the modal itself and its backdrop.  In addition, it emulates the browser shenanigans necessary to support Bootstrap 4's built-in CSS transitions (essentially, by delaying some of the effects of changing the `visible` prop for 150 milliseconds).

react-bootstrap4-modal also contains a `ConfirmModal` component, which is intended as an easy responsive replacement for the browser's `confirm` built-in function.

### Modal Props

Prop name       | Type                | Description
----------------|---------------------|-------------
visible         | boolean (required)  | Whether or not the modal is currently visible
onClickBackdrop | function (optional) | If present, a function that will be called when the user clicks on the backdrop behind the modal

### ConfirmModal Props

Prop name       | Type                | Description
----------------|---------------------|-------------
visible         | boolean (required)  | Whether or not the modal is currently visible
onOK            | function (required) | A function that will be called when the user clicks "OK"
onCancel        | function (required) | A function that will be called when the user clicks "Cancel"

## License

react-bootstrap4-modal is Copyright &copy; 2017 Nat Budin and released under the terms and conditions of the MIT License.  See the COPYING file for more details.