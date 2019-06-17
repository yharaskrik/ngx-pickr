export interface Interaction {
  /**
   * hex option  (hexadecimal representation of the rgba value)
   */
  hex?: boolean,

  /**
   * rgba option (red green blue and alpha)
   */
  rgba?: boolean,

  /**
   * hsla option (hue saturation lightness and alpha)
   */
  hsla?: boolean,

  /**
   * hsva option (hue saturation value and alpha)
   */
  hsva?: boolean,

  /**
   * cmyk option (cyan mangenta yellow key )
   */
  cmyk?: boolean,

  /**
   * input / output element
   */
  input?: boolean,

  /**
   * Clear button
   */
  clear?: boolean,

  /**
   * Save button
   */
  save?: boolean
}

export interface Strings {
  /**
   * Default for save button
   */
  save?: string,

  /**
   * Default for clear button
   */
  clear?: string
}

export interface Components {

  /**
   * Defines if the palette itself should be visible.
   * Will be overwritten with true if preview, opacity or hue are true
   */
  palette?: boolean,

  /**
   * Left side color comparison
   */
  preview?: boolean,

  /**
   * Opacity slider
   */
  opacity?: boolean,

  /**
   * Hue slider
   */
  hue?: boolean,

  /**
   *Bottom interaction bar, theoretically you could use 'true' as propery.
   * But this would also hide the save-button.
   */
  interaction?: Interaction
}

export interface PickrConfig {

  /**
   * Selector or element which will be replaced with the actual color-picker.
   * Can be a HTMLElement.
   */
  el?: string,

  /**
   * Which theme you want to use. Can be 'classic', 'monolith' or 'nano'
   */
  theme?: string,

  /**
   * Nested scrolling is currently not supported and as this would be really sophisticated to add this it's easier to set this to true
   * which will hide pickr if the user scrolls the area behind it.
   */
  closeOnScroll?: boolean,

  /**
   * Custom class wich gets added to the pickr-app. Can be used to apply custom styles.
   */
  appClass?: string,

  /**
   * Using the 'el' Element as button, won't replace it with the pickr-button.
   * If true, appendToBody will also be automatically true.
   */
  useAsButton?: boolean,

  /**
   * If true pickr won't be fixed and instead append after the in el resolved element.
   * Setting this to true will also set showAlways to true. It's possible to hide it via .hide() anyway.
   */
  inline?: boolean,

  /**
   * Defines the direction in which the knobs of hue and opacity can be moved.
   * 'v' => opacity- and hue-slider can both only moved vertically.
   * 'hv' => opacity-slider can be moved horizontally and hue-slider vertically.
   * Can be used to apply custom layouts
   */
  sliders?: string,

  /**
   * Start state. If true 'disabled' will be added to the button's classlist.
   */
  disabled?: boolean,

  /**
   * If set to false it would directly apply the selected color on the button and preview.
   */
  comparison?: boolean,

  /**
   * Default color
   */
  default?: string,

  /**
   * Optional color swatches. null by default which means it's disabled.
   * Types are all these allowed which can be used in pickr e.g. hex, hsv(a), hsl(a), rgb(a), cmyk or a name like 'magenta'
   */
  swatches?: Array<string>,

  /**
   * Default color representation.
   * Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
   */
  defaultRepresentation?: string,

  /**
   * Option to keep the color picker always visible. You can still hide / show it via
   * 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
   * you click it, it will fire the onSave event.
   */
  showAlways?: boolean,

  /**
   * Close pickr with this specific key.
   * Default is 'Escape'. Can be the event key or code.
   */
  closeWithKey?: string,

  /**
   * Defines the position of the color-picker.
   * Any combinations of top, left, bottom or right with one of these optional modifiers?: start, middle, end
   * Examples?: top-start / right-end
   * If clipping occurs, the color picker will automatically choose its position.
   */
  position?: string,

  /**
   * Enables the ability to change numbers in an input field with the scroll-wheel.
   * To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
   */
  adjustableNumbers?: boolean,

  /**
   * Show or hide specific components.
   * By default only the palette (and the save button) is visible.
   */
  components?: Components,

  /**
   * Button strings, brings the possibility to use a language other than English.
   */
  strings?: Strings
}
