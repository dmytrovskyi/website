(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{625:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"object-relational-mapping-orm-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-relational-mapping-orm-framework"}},[t._v("#")]),t._v(" Object-Relational Mapping (ORM) framework "),s("seo")],1),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Attention")]),t._v(" "),s("p",[t._v("Oat++ ORM will be available starting from version "),s("code",[t._v("1.2.0")]),t._v(".\nAt the moment this docs are provided for enthusiasts doing beta-testing."),s("br"),t._v("\nFor more info ask us a question in the "),s("a",{attrs:{href:"https://gitter.im/oatpp-framework/Lobby",target:"_blank",rel:"noopener noreferrer"}},[t._v("devs chat on Gitter"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WIP")]),t._v(" "),s("p",[t._v("This DOC is WIP")])]),t._v(" "),s("p",[t._v("Oat++ ORM framework is a set of generalized interfaces and their implementations to make it easy to work with databases.")]),t._v(" "),s("p",[t._v("It's based on an "),s("RouterLink",{attrs:{to:"/docs/components/dto/"}},[t._v("object-mapping framework")]),t._v(" and ensures data consistency when manipulating with data.\nAlso, it integrates perfectly with other Oat++ components ensuring seamless data-flow in the application\n(example: from REST to database, from the database to REST).")],1),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#high-level-overview"}},[t._v("High-Level Overview")]),s("ul",[s("li",[s("a",{attrs:{href:"#declare-dbclient"}},[t._v("Declare DbClient")])]),s("li",[s("a",{attrs:{href:"#create-dbclient-component-and-connect-to-database"}},[t._v("Create DbClient Component And Connect to Database")])]),s("li",[s("a",{attrs:{href:"#dbclient-usage-example"}},[t._v("DbClient Usage Example")])])])]),s("li",[s("a",{attrs:{href:"#libraries-hierarchy"}},[t._v("Libraries Hierarchy")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"high-level-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#high-level-overview"}},[t._v("#")]),t._v(" High-Level Overview")]),t._v(" "),s("h3",{attrs:{id:"declare-dbclient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#declare-dbclient"}},[t._v("#")]),t._v(" Declare DbClient")]),t._v(" "),s("p",[t._v("The main component you are going to work with is the "),s("RouterLink",{attrs:{to:"/api/latest/oatpp/orm/DbClient/"}},[t._v("DbClient")]),t._v(".\nYou may treat it as the main point interfacing with your data. Here you declare database queries and manage database schema migrations.")],1),t._v(" "),s("p",[t._v("Database queries are declared with the help of code-gen macros."),s("br"),t._v("\nDbClient code generation section must begin with\n"),s("code",[t._v("#include OATPP_CODEGEN_BEGIN(DbClient)")]),t._v(" and must be closed with\n"),s("code",[t._v("#include OATPP_CODEGEN_END(DbClient)")]),t._v("."),s("br"),t._v(" "),s("em",[t._v("Do not forget to close the code generation section in order to avoid macro conflicts later in the code!")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/orm/SchemaMigration.hpp"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/orm/DbClient.hpp"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp/core/macro/codegen.hpp"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_BEGIN(DbClient) ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< Begin code-gen section")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClient")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("orm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("DbClient "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("orm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Executor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("orm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("DbClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("orm"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("SchemaMigration "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("migration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Init schema using SchemaMigration")]),t._v("\n    migration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sql/initial_schema.sql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    migration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sql/schema_fix_1.sql"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    migration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("migrate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//<-- Throws an error on migration failure.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Declare create user method\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QUERY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INSERT INTO users (name, email, role) VALUES (:name, :email, :role);"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SQL-template")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PARAM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PARAM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" email"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PARAM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Enum"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserRoles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("AsString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" role"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Template parameters")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Declare get user-by id method\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("QUERY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getUserByName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM users WHERE name=:name;"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SQL-template")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PARAM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Template parameters")]),t._v("\n        \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" OATPP_CODEGEN_END(DbClient) ")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("///< End code-gen section")]),t._v("\n")])])]),s("h3",{attrs:{id:"create-dbclient-component-and-connect-to-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-dbclient-component-and-connect-to-database"}},[t._v("#")]),t._v(" Create DbClient Component And Connect to Database")]),t._v(" "),s("p",[t._v("DbClient is a heavy object - you want to instantiate it once and then inject it in whatever places you are going to use it.")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("ConnectionProvider")]),t._v(" and "),s("code",[t._v("ConnectionPool")]),t._v(" objects can be reused by multiple "),s("code",[t._v("Executors")]),t._v(" unless it's\nprohibited by a database-specific implementation.")]),t._v(" "),s("li",[s("strong",[t._v("Note:")]),t._v(" "),s("code",[t._v("Executor")]),t._v(" can be reused by multiple DbClients unless it's prohibited by a database-specific implementation.")])]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"db/MyClient.hpp"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token macro property"}},[t._v("#"),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("include")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oatpp-sqlite/orm.hpp"')])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AppComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n   * Create DbClient component.\n   * SQLite is used as an example here. For other databases declaration is similar.\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_CREATE_COMPONENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("MyClient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" myDatabaseClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create database-specific ConnectionProvider */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionProvider "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionProvider"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/database.sqlite"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n  \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create database-specific ConnectionPool */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" connectionPool "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ConnectionPool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createShared")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionProvider"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                                                                      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* max-connections */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n                                                                      std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("chrono"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("seconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* connection TTL */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create database-specific Executor */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" executor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("sqlite"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Executor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connectionPool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create MyClient database client */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("make_shared"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MyClient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("executor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"dbclient-usage-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dbclient-usage-example"}},[t._v("#")]),t._v(" DbClient Usage Example")]),t._v(" "),s("div",{staticClass:"language-cpp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-cpp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Inject MyClient database client */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("OATPP_COMPONENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("shared_ptr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("db"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("MyClient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Create new user in the database */")]),t._v("\nclient"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin@domain.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UserRoles"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("ADMIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Find user by name in the database */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" client"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUserByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Retrieve query result as a vector of UserDto objects */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Of cause, UserDto had to be previously defined */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* You can also use oatpp::Fields<oatpp::Any> - instead of UserDto for any arbitrary result */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" dataset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("fetch"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Vector"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("oatpp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("Object"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserDto"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* And we can easily serialize result as a json string using json object mapper */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto")]),t._v(" json "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jsonObjectMapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dataset"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Print the resultant json */")]),t._v("\nstd"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("cout "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" json"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("c_str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" std"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),t._v("endl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Output:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin@domain.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"role"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ROLE_ADMIN"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"libraries-hierarchy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#libraries-hierarchy"}},[t._v("#")]),t._v(" Libraries Hierarchy")]),t._v(" "),s("p",[t._v("The main "),s("strong",[t._v("oatpp")]),t._v(' module contains ORM interfaces only. In order to "plug" a specific database,\nyou have to link the corresponding adaptor (ex.: '),s("strong",[t._v("oatpp-sqlite")]),t._v(").")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- oatpp                     # The main oatpp module. ORM interfaces are here.\n    |\n    |- oatpp-sqlite         # Sqlite adapter for oatpp ORM. Sqlite-specific implementation is here.\n    |- oatpp-postgresql     # PostgreSQL adapter for oatpp ORM. PostgreSQL-specific implementation is here.\n    ...\n    ... etc.\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);