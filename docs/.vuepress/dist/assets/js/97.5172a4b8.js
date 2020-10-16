(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{466:function(t,e,a){"use strict";a.r(e);var r=a(42),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"connector-hpp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-hpp"}},[t._v("#")]),t._v(" Connector.hpp"),a("seo")],1),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/blob/master/src/oatpp-websocket/Connector.hpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("This File On Github"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/oatpp/oatpp-websocket/issues/new?title=API%20question&body=In%20file:%20oatpp-websocket/Connector.hpp%0A%0A%23%20Question%0A%0A%3Cyour-question-here%3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ask A Question"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("API: latest")]),a("br"),t._v(" "),a("code",[t._v("module: oatpp-websocket")]),a("br"),t._v(" "),a("code",[t._v('#include "oatpp-websocket/Connector.hpp"')])]),t._v(" "),a("h2",{attrs:{id:"connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector"}},[t._v("#")]),t._v(" Connector")]),t._v(" "),a("p",[t._v("Helper class to do client websocket connect.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" oatpp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" websocket "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connector")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"typedefs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typedefs"}},[t._v("#")]),t._v(" Typedefs")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("oatpp::data::stream::IOStream")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-connection"}},[t._v("Connection")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::async::Action")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-action"}},[t._v("Action")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("oatpp::web::protocol::http::Headers")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-headers"}},[t._v("Headers")])]),t._v(" "),a("td",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1)])])]),t._v(" "),a("h3",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Return Type")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Summary")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("[none]")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-connector"}},[t._v("Connector")])]),t._v(" "),a("td",[t._v("Constructor.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Connector>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-createshared"}},[t._v("createShared")])]),t._v(" "),a("td",[t._v("Create shared Connector.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("std::shared_ptr<Connection>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-connect"}},[t._v("connect")])]),t._v(" "),a("td",[t._v("Connect to server, do websocket-handshake and return Connection which can be then passed to WebSocket constructor. "),a("br")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("CoroutineStarterForResult<const std::shared_ptr<Connection>&>")])]),t._v(" "),a("td",[a("a",{attrs:{href:"#connector-connectasync"}},[t._v("connectAsync")])]),t._v(" "),a("td",[t._v("Connect to server, do websocket-handshake and return Connection which can be then passed to WebSocket constructor. "),a("br")])])])]),t._v(" "),a("h3",{attrs:{id:"connector-connection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-connection"}},[t._v("#")]),t._v(" Connector::Connection")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/data/stream/Stream/#iostream"}},[t._v("oatpp::data::stream::IOStream")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("stream"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("IOStream Connection\n")])])]),a("h3",{attrs:{id:"connector-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-action"}},[t._v("#")]),t._v(" Connector::Action")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("async"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Action Action\n")])])]),a("h3",{attrs:{id:"connector-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-headers"}},[t._v("#")]),t._v(" Connector::Headers")]),t._v(" "),a("p",[t._v("Convenience typedef for "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/web/protocol/http/Http/#headers"}},[t._v("oatpp::web::protocol::http::Headers")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typedef")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("web"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Headers Headers\n")])])]),a("h3",{attrs:{id:"connector-connector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-connector"}},[t._v("#")]),t._v(" Connector::Connector")]),t._v(" "),a("p",[t._v("Constructor. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" connectionProvider - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/network/ConnectionProvider/#clientconnectionprovider"}},[t._v("oatpp::network::ClientConnectionProvider")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Connector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ClientConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connectionProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"connector-createshared"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-createshared"}},[t._v("#")]),t._v(" Connector::createShared")]),t._v(" "),a("p",[t._v("Create shared Connector. "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" connectionProvider - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/network/ConnectionProvider/#clientconnectionprovider"}},[t._v("oatpp::network::ClientConnectionProvider")]),t._v(". ")],1),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("code",[t._v("std::shared_ptr")]),t._v(" to Connector. ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ClientConnectionProvider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" connectionProvider"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"connector-connect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-connect"}},[t._v("#")]),t._v(" Connector::connect")]),t._v(" "),a("p",[t._v("Connect to server, do websocket-handshake and return Connection which can be then passed to WebSocket constructor. "),a("br"),t._v(" "),a("strong",[t._v("(Blocking call)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" path - path to websocket endpoint. ")]),a("li",[a("strong",[t._v("@param")]),t._v(" headers - websocket connect request headers. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("a",{attrs:{href:"#connector-connection"}},[t._v("Connector::Connection")]),t._v(". ")])])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connect")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])]),a("h3",{attrs:{id:"connector-connectasync"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connector-connectasync"}},[t._v("#")]),t._v(" Connector::connectAsync")]),t._v(" "),a("p",[t._v("Connect to server, do websocket-handshake and return Connection which can be then passed to WebSocket constructor. "),a("br"),t._v(" "),a("strong",[t._v("(Async call)")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("@param")]),t._v(" path - path to websocket endpoint. ")]),a("li",[a("strong",[t._v("@param")]),t._v(" headers - websocket connect request headers. ")]),a("li",[a("strong",[t._v("@return")]),t._v(" - "),a("RouterLink",{attrs:{to:"/api/latest/oatpp/core/async/Coroutine/#action"}},[t._v("oatpp::async::Action")]),t._v(". ")],1)])]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("CoroutineStarterForResult"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Connection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("connectAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oatpp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Headers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" headers "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);