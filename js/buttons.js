!function(t,n,i,e){"use strict";function o(n,i){this.options=t.extend({},d,i),this._defaults=d,this._name=u,this.$element=t(n),this.init()}var u="menuButton",d={propertyName:"value"};o.prototype={constructor:o,init:function(){this.toggle()},toggle:function(t,n){"show"===this.$element.data("dropdown")?this.hideMenu():this.showMenu()},showMenu:function(){this.$element.data("dropdown","show"),this.$element.find("ul").show()},hideMenu:function(){this.$element.data("dropdown","hide"),this.$element.find("ul").hide()}},t.fn[u]=function(n){return this.each(function(){t.data(this,"plugin_"+u)?t.data(this,"plugin_"+u).toggle():t.data(this,"plugin_"+u,new o(this,n))})},t(i).on("click",function(n){t.each(t("[data-buttons=dropdown]"),function(i,e){t(n.target.offsetParent)[0]!=t(this)[0]&&t.data(this,"plugin_"+u)&&(t.data(this,"plugin_"+u).hideMenu(),t(this).find("ul").hide())})}),t(i).on("click","[data-buttons=dropdown]",function(n){var i=t(n.currentTarget);i.menuButton()}),t(i).on("click","[data-buttons=dropdown] > a",function(t){t.preventDefault()})}(jQuery,window,document);