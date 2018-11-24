import React, { PureComponent } from 'react';
import { CheckIcon } from './Icons';
import styles from './Checkbox.module.css';
import ColorState from './ColorState';

export default class Checkbox extends PureComponent {
  render() {
    return (
      <ColorState>
        { ({ getColor }) => (
          <label
            className={ [styles.wrapper, this.props.className].join(' ') }
            style={{ color: getColor('shade7') }}
          >
            <input
              type="checkbox"
              className={ styles.input }
              checked={ this.props.value }
              onChange={ evt => this.props.onChange(evt.target.checked) }
            />
            <CheckIcon
              backgroundColor={ this.props.value ? getColor('shade7') : 'transparent' }
              outlineColor={ this.props.value ? 'transparent' : getColor('shade7') }
              checkColor={ this.props.value ? getColor('shade0') : 'transparent' }
            />
            <span className={ styles.label }>{ this.props.label }</span>
          </label>
        ) }
      </ColorState>
    );
  }
}
