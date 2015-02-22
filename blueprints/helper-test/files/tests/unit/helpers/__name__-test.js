/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  <%= camelizedModuleName %>
} from '<%= dasherizedPackageName %>/helpers/<%= dasherizedModuleName %>';

describe('<%= classifiedModuleName %>Helper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = <%= camelizedModuleName %>(42);
    expect(result).to.be.ok;
  });
});
