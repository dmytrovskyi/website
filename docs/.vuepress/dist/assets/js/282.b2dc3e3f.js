(window.webpackJsonp=window.webpackJsonp||[]).push([[282],{653:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"example-iot-hue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-iot-hue"}},[t._v("#")]),t._v(" Example-IoT-Hue "),s("seo")],1),t._v(" "),s("p",[t._v("Example project how-to create an Philips Hue compatible REST-API that is discovered and controllable by Hue compatible Smart-Home devices like Amazon Alexa or Google Echo.")]),t._v(" "),s("p",[t._v('It demonstrates how Oat++ can be used to develop an Amazon Alexa or Google Home compatible REST-API which emulates Philips Hue bulbs.\nOat++ answers to search requests of you favorite SmartHome hub and you can register your fake bulbs to it.\nAfter the registration of your fake bulbs to your Hub/Alexa/Google Home, you can control your Oat++ application\nwith 🗣️"Alexa, turn on <your fake device name>"!')]),t._v(" "),s("p",[t._v("For this discoverability, the "),s("code",[t._v("oatpp-ssdp")]),t._v(" module is used to receive and answer SSDP searches.")]),t._v(" "),s("p",[t._v("This REST-API was implemented with the help of the "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hue API unofficial reference documentation by burgestrand.se"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),s("p",[t._v("This project is using "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp-swagger",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp-swagger"),s("OutboundLink")],1),t._v(" and  "),s("a",{attrs:{href:"https://github.com/oatpp/oatpp-ssdp",target:"_blank",rel:"noopener noreferrer"}},[t._v("oatpp-ssdp"),s("OutboundLink")],1),t._v(" modules.")]),t._v(" "),s("h3",{attrs:{id:"project-layout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-layout"}},[t._v("#")]),t._v(" Project layout")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('|- CMakeLists.txt                        // projects CMakeLists.txt\n|- src/\n|   |\n|   |- controller/                       // Folder containing HueDeviceController and SsdpController where all endpoints are declared\n|   |- db/                               // Folder with database mock\n|   |- dto/                              // DTOs are declared here\n|   |- SwaggerComponent.hpp              // Swagger-UI config\n|   |- DeviceDescriptorComponent.hpp     // Component describing your "Hue Hub" (YOU HAVE TO CONFIGURE THIS FILE TO FIT YOUR ENVIRONMENT)\n|   |- AppComponent.hpp                  // Service config\n|   |- App.cpp                           // main() is here\n|\n|- test/                                 // test folder\n|- utility/install-oatpp-modules.sh      // utility script to install required oatpp-modules.\n')])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"build-and-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-and-run"}},[t._v("#")]),t._v(" Build and Run")]),t._v(" "),s("p",[t._v("Before you run this example you have to edit "),s("code",[t._v("src/DeviceDescriptorComponent.hpp")]),t._v(" to match your IP address.\nSince this is only an example and to keep it simple this is not automated or parameterised!\nYou have to come up with your own implementation that fits your environment.")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DeviceDescriptor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceDescriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"deviceDescriptor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" desc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DeviceDescriptor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ToDo: Add your machines Address and Port here! You have to come up with your own way to automate this...")]),t._v("\ndesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("ipPort "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.100.100:80"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// your real IP and Port your HTTP-Controller is running on")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// assignable")]),t._v("\ndesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("mac "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"be5t0a70cafe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// can be a fake one")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fixed")]),t._v("\ndesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("sn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000000471337"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndesc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("uuid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2f402f80-da50-11e1-9b23-"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" desc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("mac"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" desc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"using-cmake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-cmake"}},[t._v("#")]),t._v(" Using CMake")]),t._v(" "),s("p",[s("strong",[t._v("Requires")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("oatpp")]),t._v(", "),s("code",[t._v("oatpp-ssdp")]),t._v(" and "),s("code",[t._v("oatpp-swagger")]),t._v(" modules installed. You may run "),s("code",[t._v("utility/install-oatpp-modules.sh")]),t._v("\nscript to install required oatpp modules.")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ mkdir build && cd build\n$ cmake ..\n$ make \n$ ./example-iot-hue-ssdp-exe        # - run application.\n")])])]),s("h4",{attrs:{id:"in-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-docker"}},[t._v("#")]),t._v(" In Docker")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("$ docker build -t example-iot-hue-ssdp .\n$ docker run -p 8000:8000 -t example-iot-hue-ssdp\n")])])]),s("h4",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("p",[t._v("Configure the example ("),s("code",[t._v("src/DeviceDescriptorComponent.hpp")]),t._v(") and run it. Now tell your Alexa or Echo to search for new devices.\nThey should come up with two new Devices "),s("code",[t._v("Oat")]),t._v(" and "),s("code",[t._v("Grain")]),t._v('.\nAfter you configured them in your Smart-Home App just say something like "Alexa, turn on Oat" and you should see the correspoding '),s("code",[t._v("PUT")]),t._v(" request in the console.")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"endpoints-declaration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-declaration"}},[t._v("#")]),t._v(" Endpoints declaration")]),t._v(" "),s("p",[t._v("All implemented endpoints are compatible to a Philips Hue bridge (V1 and V3).\n"),s("strong",[t._v("Their path and structure are fixed!")])]),t._v(" "),s("h4",{attrs:{id:"ssdp-search-responder"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ssdp-search-responder"}},[t._v("#")]),t._v(" SSDP: Search Responder")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"M-SEARCH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" star"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This Endpoint accepts and answers to "),s("code",[t._v("M-SEARCH")]),t._v(" SSDP packets like a Philips Hue hub would do.")]),t._v(" "),s("h4",{attrs:{id:"http-description-xml"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-description-xml"}},[t._v("#")]),t._v(" HTTP: description.xml")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/description.xml"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("In the discovery answer, a reference to this endpoint is send back.\nThis endpoints emulates a static "),s("code",[t._v("desciption.xml")]),t._v(" which includes all necessary information required to act as an Philips Hue hub.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/api/discovery/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bridge discovery (burgestrand.se)"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"http-one-shot-user-registration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-one-shot-user-registration"}},[t._v("#")]),t._v(" HTTP: One-Shot 'user' registration")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" appRegister"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserRegisterDto"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" userRegister"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This endpoint just emulates a valid user-registration on a Philips Hue hub.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/api/auth/registration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Application registration (burgestrand.se)"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"http-get-all-lights"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-get-all-lights"}},[t._v("#")]),t._v(" HTTP: Get all 'lights'")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/{username}/lights"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getLights"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This endpoint returns a "),s("strong",[t._v("object")]),t._v(" of all devices in a Philips Hue compatible fashion.\nHowever, formally this endpoint should just return the names. But returning the full list is fine too.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/api/lights/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lights (burgestrand.se)"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"http-get-state-of-a-specific-light"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-get-state-of-a-specific-light"}},[t._v("#")]),t._v(" HTTP: Get state of a specific light")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/{username}/lights/{hueId}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getLight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hueId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("This endpoint returns the state of the light given in "),s("code",[t._v("{hueId}")]),t._v(" in a Philips Hue compatible fashion.")]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/api/lights/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lights (burgestrand.se)"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"http-set-state-of-a-specific-light"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-set-state-of-a-specific-light"}},[t._v("#")]),t._v(" HTTP: Set state of a specific light")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ENDPOINT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PUT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/api/{username}/lights/{hueId}/state"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" updateState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PATH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Int32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hueId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("BODY_DTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("HueDeviceStateDto"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v('This endpoint accepts a Philips Hue compatible state-object and sets the state in the internal database accordingly.\nIt is called e.g. by Alexa if you tell it 🗣️"Alexa, turn on <devicename>".\nFinally it returns a "success" or "error" object.')]),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"http://www.burgestrand.se/hue-api/api/lights/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lights (burgestrand.se)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);