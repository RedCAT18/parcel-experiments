import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHight: 1.666,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['700']
    },
    {
      name: 'Open Sans',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Montserrat', 'Helvetica Neue', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif']
});

//js를 css로 바꾸어줌
typography.injectStyles();

export default typography;
