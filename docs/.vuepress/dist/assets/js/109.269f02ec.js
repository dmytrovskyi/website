(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{219:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"bodydecoder-hpp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-hpp","aria-hidden":"true"}},[t._v("#")]),t._v(" BodyDecoder.hpp"),e("seo")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/oatpp/oatpp/blob/master/src/oatpp/web/protocol/http/incoming/BodyDecoder.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://github.com/oatpp/oatpp/issues/new?title=API%20question&body=In%20file:%20oatpp/web/protocol/http/incoming/BodyDecoder.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),e("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v('Abstract BodyDecoder. Body Decoder is responsible to decode body of incoming request. For example if you receive chunked-encoded body, you have to decode it in order to get "plain" body. You may extend this class in order to customize body-decoding process.')]),t._v(" "),t._m(2),t._m(3),t._v(" "),e("table",[t._m(4),t._v(" "),e("tbody",[t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("tr",[t._m(8),t._v(" "),t._m(9),t._v(" "),e("td",[t._v("Read body stream, decode, and deserialize it as DTO Object (see "),e("a",{attrs:{href:"https://oatpp.io/docs/components/dto/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Transfer Object (DTO)"),e("OutboundLink")],1),t._v(").")])]),t._v(" "),t._m(10),t._v(" "),t._m(11)])]),t._v(" "),t._m(12),t._v(" "),e("p",[t._v("Implement this method! Decode bodyStream and write decoded data to toStream. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" toStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1)])]),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("Implement this method! Same as "),e("a",{attrs:{href:"#bodydecoder-decode"}},[t._v("BodyDecoder::decode()")]),t._v(" but Async. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" parentCoroutine - caller coroutine as "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#abstractcoroutine"}},[t._v("oatpp::async::AbstractCoroutine")]),t._v("*. ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" actionOnReturn - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(" to do when decoding finished. ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" toStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#outputstream"}},[t._v("oatpp::data::stream::OutputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(15),t._m(16),t._v(" "),e("p",[t._v("Read body stream and decode it to string. "),e("ul",[e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),t._m(17)])]),t._v(" "),t._m(18),t._m(19),t._v(" "),e("p",[t._v("Read body stream, decode, and deserialize it as DTO Object (see "),e("a",{attrs:{href:"https://oatpp.io/docs/components/dto/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Data Transfer Object (DTO)"),e("OutboundLink")],1),t._v("). "),e("ul",[t._m(20),e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" objectMapper - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(". ")],1),t._m(21)])]),t._v(" "),t._m(22),t._m(23),t._v(" "),e("p",[t._v("Same as "),e("a",{attrs:{href:"#bodydecoder-decodetostring"}},[t._v("BodyDecoder::decodeToString()")]),t._v(" but Async. "),e("ul",[t._m(24),e("li",[e("strong",[t._v("@param")]),t._v(" parentCoroutine - caller coroutine as "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#abstractcoroutine"}},[t._v("oatpp::async::AbstractCoroutine")]),t._v("*. ")],1),t._m(25),e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" - "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(26),t._m(27),t._v(" "),e("p",[t._v("Same as "),e("a",{attrs:{href:"#bodydecoder-decodetodto"}},[t._v("BodyDecoder::decodeToDto()")]),t._v(" but Async. "),e("ul",[t._m(28),t._m(29),e("li",[e("strong",[t._v("@param")]),t._v(" parentCoroutine - caller coroutine as "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#abstractcoroutine"}},[t._v("oatpp::async::AbstractCoroutine")]),t._v("*. ")],1),t._m(30),e("li",[e("strong",[t._v("@param")]),t._v(" headers - Headers map. "),e("router-link",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" bodyStream - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#inputstream"}},[t._v("oatpp::data::stream::InputStream")]),t._v(". ")],1),e("li",[e("strong",[t._v("@param")]),t._v(" objectMapper - "),e("code",[t._v("std::shared_ptr")]),t._v(" to "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/data/mapping/ObjectMapper/#objectmapper"}},[t._v("oatpp::data::mapping::ObjectMapper")]),t._v(". ")],1),e("li",[e("strong",[t._v("@return")]),t._v(" -  "),e("router-link",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),t._m(31)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("API: latest")]),a("br"),this._v(" "),a("code",[this._v("module: oatpp")]),a("br"),this._v(" "),a("code",[this._v('#include "oatpp/web/protocol/http/incoming/BodyDecoder.hpp"')])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"bodydecoder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" web "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" protocol "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" http "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" incoming "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BodyDecoder")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods","aria-hidden":"true"}},[this._v("#")]),this._v(" Methods")])},function(){var t=this.$createElement,a=this._self._c||t;return a("thead",[a("tr",[a("th",[this._v("Return Type")]),this._v(" "),a("th",[this._v("Name")]),this._v(" "),a("th",[this._v("Summary")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[a("code",[this._v("void")])]),this._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decode"}},[this._v("decode")])]),this._v(" "),a("td",[this._v("Implement this method! Decode bodyStream and write decoded data to toStream.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[a("code",[this._v("oatpp::async::Action")])]),this._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decodeasync"}},[this._v("decodeAsync")])]),this._v(" "),a("td",[this._v("Implement this method! Same as "),a("a",{attrs:{href:"#bodydecoder-decode"}},[this._v("BodyDecoder::decode()")]),this._v(" but Async.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[a("code",[this._v("oatpp::String")])]),this._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decodetostring"}},[this._v("decodeToString")])]),this._v(" "),a("td",[this._v("Read body stream and decode it to string.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("code",[this._v("Type::ObjectWrapper")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("td",[a("a",{attrs:{href:"#bodydecoder-decodetodto"}},[this._v("decodeToDto")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[a("code",[this._v("oatpp::async::Action")])]),this._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decodetostringasync"}},[this._v("decodeToStringAsync")])]),this._v(" "),a("td",[this._v("Same as "),a("a",{attrs:{href:"#bodydecoder-decodetostring"}},[this._v("BodyDecoder::decodeToString()")]),this._v(" but Async.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("tr",[a("td",[a("code",[this._v("oatpp::async::Action")])]),this._v(" "),a("td",[a("a",{attrs:{href:"#bodydecoder-decodetodtoasync"}},[this._v("decodeToDtoAsync")])]),this._v(" "),a("td",[this._v("Same as "),a("a",{attrs:{href:"#bodydecoder-decodetodto"}},[this._v("BodyDecoder::decodeToDto()")]),this._v(" but Async.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decode","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decode")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" toStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decodeasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodeasync","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeAsync")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("virtual")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AbstractCoroutine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" parentCoroutine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" actionOnReturn"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("OutputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" toStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decodetostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodetostring","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeToString")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@return")]),this._v(" - oatpp::String;. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeToString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                             "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decodetodto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodetodto","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeToDto")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@tparam")]),this._v(" Type - DTO object type. ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@return")]),this._v(" - deserialized DTO object. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" Type"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeToDto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" objectMapper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decodetostringasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodetostringasync","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeToStringAsync")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@tparam")]),this._v(" ParentCoroutineType - caller coroutine type. ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@param")]),this._v(" callback - pointer to callback function. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" ParentCoroutineType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\noatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeToStringAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AbstractCoroutine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" parentCoroutine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ParentCoroutineType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                         "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"bodydecoder-decodetodtoasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bodydecoder-decodetodtoasync","aria-hidden":"true"}},[this._v("#")]),this._v(" BodyDecoder::decodeToDtoAsync")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@tparam")]),this._v(" DtoType - DTO object type. ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@tparam")]),this._v(" ParentCoroutineType - caller coroutine type. ")])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",[a("strong",[this._v("@param")]),this._v(" callback - pointer to callback function. ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"language-cpp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-cpp"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("template")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DtoType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" ParentCoroutineType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\noatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decodeToDtoAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AbstractCoroutine"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" parentCoroutine"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                      oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ParentCoroutineType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("callback"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typename")]),t._v(" DtoType"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectWrapper"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("InputStream"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" bodyStream"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("mapping"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ObjectMapper"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" objectMapper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v("\n")])])])}],!1,null,null,null);a.default=r.exports}}]);