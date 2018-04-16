System.config({
    paths: {
      // paths serve as alias
      'npm:': '/node_modules/'
    },
    map: {
      'ng-loader': '../src/systemjs-angular-loader.js',
      app: '/app',
      '@angular/upgrade/static': 'npm:@angular/upgrade/bundles/upgrade-static.umd.js',
    }
});