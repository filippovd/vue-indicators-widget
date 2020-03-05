import VueIndicatorsWidget from './VueIndicatorsWidget';

const install = (Vue) => {
	Vue.component('indicators-widget', VueIndicatorsWidget)
}

export default {
	install
}

export { VueIndicatorsWidget }