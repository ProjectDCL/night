webpackJsonp([2],{14:function(n,i,t){"use strict";(function(n){var e=t(61);t.n(e);i.a=function(){let i=function(){let i=function(i,t){let e=t.offset().top,o=Math.ceil(n(window).height()/6),c=e-i-o,l=t.outerHeight(!0)+e,a=i+o-l;return c<=0&&a<=0};return{scroll:function(){n(window).on("scroll",function(){let t=n(window).scrollTop(),e=n(".article"),o=n(".menu-aside");e.each(function(){let e=n(this);if(i(t,n(this))){let i=e.data("id");o.find(n(".menu-aside__link")).removeClass("menu-aside__link_active"),o.find('[data-id="'+i+'"]').addClass("menu-aside__link_active")}})})},click:function(){n(document).ready(function(){n(".menu-aside__link").click(function(i){i.preventDefault();let t=n(this),e=t.data("id"),o=n(".blog-content__article").find('[data-id="'+e+'"]').offset().top;n("body, html").animate({scrollTop:o},500)})})}}}();i.scroll(),i.click()}}).call(i,t(1))},25:function(n,i,t){"use strict";var e=t(44);t.n(e)},39:function(n,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=t(0),o=(t(5),t(4),t(2)),c=t(6),l=t(3),a=t(8),s=t(14);t.i(l.a)(),t.i(o.a)(),t.i(s.a)(),t.i(a.a)(),t.i(c.a)(),t.i(e.a)(),console.log("in blog.js")},44:function(n,i){},45:function(n,i){},6:function(n,i,t){"use strict";(function(n){var e=t(45);t.n(e),t(14),t(25);i.a=function(){(function(){let i=n(".blog-content__menu"),t=n("#js_blog-content__button-menu"),e=i.offset().top;return{init:function(){n(window).scroll(function(){n(window).scrollTop()>e?(i.addClass("blog-content__menu_sticky"),t.addClass("blog-content__button-menu_sticky")):(i.removeClass("blog-content__menu_sticky"),t.removeClass("blog-content__button-menu_sticky"))})}}})().init()}}).call(i,t(1))},60:function(n,i){},61:function(n,i){},8:function(n,i,t){"use strict";(function(n){var e=t(60);t.n(e);i.a=function(){let i=function(){let i=function(i,t){let e=t.offset().top,o=Math.ceil(n(window).height()/6),c=e-i-o,l=t.outerHeight(!0)+e,a=i+o-l;return c<=0&&a<=0};return{scroll:function(){n(window).on("scroll",function(){let t=n(window).scrollTop(),e=n(".article"),o=n(".menu-aside-mobile__list");e.each(function(){let e=n(this);if(i(t,n(this))){let i=e.data("id");o.find(n(".menu-aside-mobile__link")).removeClass("menu-aside-mobile__link_active"),o.find('[data-id="'+i+'"]').addClass("menu-aside-mobile__link_active")}})})},click:function(){n(document).ready(function(){n(".menu-aside-mobile__link").click(function(i){i.preventDefault();let t=n(this),e=t.data("id"),o=n(".blog-content__article").find('[data-id="'+e+'"]').offset().top;n("body, html").animate({scrollTop:o},500)})})},toggle:function(){let i=n(".menu-aside-mobile__button"),t=n(".menu-aside-mobile");n(document).ready(function(){i.click(function(n){n.preventDefault(),t.hasClass("menu-aside-mobile_show")?t.removeClass("menu-aside-mobile_show").addClass("menu-aside-mobile_hide"):(t.hasClass("menu-aside-mobile_hide"),t.removeClass("menu-aside-mobile_hide").addClass("menu-aside-mobile_show"))})})}}}();i.scroll(),i.click(),i.toggle()}}).call(i,t(1))}},[39]);