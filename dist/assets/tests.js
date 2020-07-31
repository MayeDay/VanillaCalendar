'use strict';

define("calendar-app/tests/integration/components/calendar-day-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | calendar-day', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <CalendarDay />
      */
      {"id":"w9m7LY3u","block":"{\"symbols\":[],\"statements\":[[8,\"calendar-day\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <CalendarDay>
              template block text
            </CalendarDay>
          
      */
      {"id":"gMAHhGDF","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"calendar-day\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calendar-app/tests/integration/components/calendar-month-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | calendar-month', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <CalendarMonth />
      */
      {"id":"qNnGejlH","block":"{\"symbols\":[],\"statements\":[[8,\"calendar-month\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <CalendarMonth>
              template block text
            </CalendarMonth>
          
      */
      {"id":"gf7r1p+U","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"calendar-month\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calendar-app/tests/integration/components/calendar-navigation-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | calendar-navigation', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <CalendarNavigation />
      */
      {"id":"vLMEbTc+","block":"{\"symbols\":[],\"statements\":[[8,\"calendar-navigation\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <CalendarNavigation>
              template block text
            </CalendarNavigation>
          
      */
      {"id":"+MkNz6w1","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"calendar-navigation\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calendar-app/tests/integration/components/calendar-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | calendar', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <Calendar />
      */
      {"id":"Dxrl7R7p","block":"{\"symbols\":[],\"statements\":[[8,\"calendar\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <Calendar>
              template block text
            </Calendar>
          
      */
      {"id":"G20Zj6gX","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"calendar\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calendar-app/tests/integration/components/title-page-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | title-page', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <TitlePage />
      */
      {"id":"n3CWvlHz","block":"{\"symbols\":[],\"statements\":[[8,\"title-page\",[],[[],[]],null]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <TitlePage>
              template block text
            </TitlePage>
          
      */
      {"id":"Ck5GaeeQ","block":"{\"symbols\":[],\"statements\":[[2,\"\\n      \"],[8,\"title-page\",[],[[],[]],[[\"default\"],[{\"statements\":[[2,\"\\n        template block text\\n      \"]],\"parameters\":[]}]]],[2,\"\\n    \"]],\"hasEval\":false,\"upvars\":[]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("calendar-app/tests/integration/helpers/date-formatter-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | date-formatter', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{date-formatter inputValue}}
      */
      {"id":"QR7MYOQo","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[35,0]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"date-formatter\"]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("calendar-app/tests/integration/helpers/day-loops-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Helper | dayLoops', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks); // TODO: Replace this with your real tests.

    (0, _qunit.test)('it renders', async function (assert) {
      this.set('inputValue', '1234');
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        {{day-loops inputValue}}
      */
      {"id":"rIhE3Atr","block":"{\"symbols\":[],\"statements\":[[1,[30,[36,1],[[35,0]],null]]],\"hasEval\":false,\"upvars\":[\"inputValue\",\"day-loops\"]}","meta":{}}));
      assert.equal(this.element.textContent.trim(), '1234');
    });
  });
});
define("calendar-app/tests/test-helper", ["calendar-app/app", "calendar-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define('calendar-app/config/environment', [], function() {
  var prefix = 'calendar-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('calendar-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
