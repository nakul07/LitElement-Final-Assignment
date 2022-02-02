import {
  registerStyles,
  css as vaadinCSS,
} from '@vaadin/vaadin-themable-mixin/register-styles.js';

registerStyles(
  'vaadin-grid',
  vaadinCSS`    
      :host(#grid) [part~='body-cell'].in-progress
      {
        background: #fbcdcc;
      };
      :host(#grid) [part~='body-cell'].completed
      {
        background: #c2f0e0;
      };
      :host(#grid) [part~='body-cell'].queued
      {
        background: #f0f488;
      };
      `
);
