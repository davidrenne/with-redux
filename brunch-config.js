exports.config = {
  hot: true,
  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    }
  },

  files: {
    javascripts: { joinTo: 'app.js' },
    stylesheets: { joinTo: 'app.css' }
  },

  plugins: {
    babel: { presets: ['es2015', 'react'] }
  }
};
