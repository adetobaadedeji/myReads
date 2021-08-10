(this.webpackJsonpmyreads=this.webpackJsonpmyreads||[]).push([[0],{27:function(e,t,o){},34:function(e,t,o){},35:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o.n(n),c=o(16),a=o.n(c),r=o(7),i=o(17),l=o(18),h=o(22),d=o(21),b=o(2),j=o(19),u=o(10),f="https://reactnd-books-api.udacity.com",k=localStorage.token;k||(k=localStorage.token=Math.random().toString(36).substr(-8));var O={Accept:"application/json",Authorization:k},p=function(e,t){return fetch("".concat(f,"/books/").concat(e.id),{method:"PUT",headers:Object(u.a)(Object(u.a)({},O),{},{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))},x=function(e){return fetch("".concat(f,"/search"),{method:"POST",headers:Object(u.a)(Object(u.a)({},O),{},{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then((function(e){return e.json()})).then((function(e){return e.books}))},m=(o(27),o(0)),v=function(e){var t=e.book;return Object(m.jsx)("li",{children:Object(m.jsxs)("div",{className:"book",children:[Object(m.jsxs)("div",{className:"book-top",children:[Object(m.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(t.imageLinks&&t.imageLinks.thumbnail,")")}}),Object(m.jsx)("div",{className:"book-shelf-changer",children:Object(m.jsxs)("select",{onChange:function(o){var n=o.target.value;!function(t,o){e.onShelfUpdate(t,o)}(t,n)},value:t.shelf,defaultValue:"none",children:[Object(m.jsx)("option",{value:"move",disabled:!0,children:"Move to..."}),Object(m.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(m.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(m.jsx)("option",{value:"read",children:"Read"}),Object(m.jsx)("option",{value:"none",children:"None"})]})})]}),Object(m.jsx)("div",{className:"book-title",children:t.title}),Object(m.jsx)("div",{className:"book-authors",children:t.authors})]})})},S=function(e){return Object(m.jsxs)("div",{className:"bookshelf",children:[Object(m.jsx)("h2",{className:"bookshelf-title",children:"Currently Reading"}),Object(m.jsx)("div",{className:"bookshelf-books",children:Object(m.jsx)("ol",{className:"books-grid",children:e.books.map((function(t){return"currentlyReading"===t.shelf&&Object(m.jsx)(v,{book:t,onShelfUpdate:e.onShelfUpdate},t.id)}))})})]})},N=function(e){return Object(m.jsxs)("div",{className:"bookshelf",children:[Object(m.jsx)("h2",{className:"bookshelf-title",children:"Read"}),Object(m.jsx)("div",{className:"bookshelf-books",children:Object(m.jsx)("ol",{className:"books-grid",children:e.books.map((function(t){return"read"===t.shelf&&Object(m.jsx)(v,{book:t,onShelfUpdate:e.onShelfUpdate},t.id)}))})})]})},g=function(e){return Object(m.jsxs)("div",{className:"bookshelf",children:[Object(m.jsx)("h2",{className:"bookshelf-title",children:"Want to Read"}),Object(m.jsx)("div",{className:"bookshelf-books",children:Object(m.jsx)("ol",{className:"books-grid",children:e.books.map((function(t){return"wantToRead"===t.shelf&&Object(m.jsx)(v,{book:t,onShelfUpdate:e.onShelfUpdate},t.id)}))})})]})},y=function(e){var t=e.books,o=e.onShelfUpdate;return Object(m.jsxs)("div",{className:"list-books",children:[Object(m.jsx)("div",{className:"list-books-title",children:Object(m.jsx)("h1",{children:"MyReads"})}),Object(m.jsx)("div",{className:"list-books-content",children:Object(m.jsxs)("div",{children:[Object(m.jsx)(S,{books:t,onShelfUpdate:o}),Object(m.jsx)(g,{books:t,onShelfUpdate:o}),Object(m.jsx)(N,{books:t,onShelfUpdate:o})]})}),Object(m.jsx)("div",{className:"open-search",children:Object(m.jsx)(r.b,{to:"/searchPage",children:Object(m.jsx)("button",{children:" Add a book"})})})]})},U=function(e){var t=e.books,o=e.searchedBooks,n=e.onSearchBook,s=e.onResetSearch,c=o.map((function(e){return t.map((function(t){return e.id===t.id&&(e.shelf=t.shelf),t})),e}));return Object(m.jsxs)("div",{className:"search-books",children:[Object(m.jsxs)("div",{className:"search-books-bar",children:[Object(m.jsx)(r.b,{to:"/",children:Object(m.jsx)("button",{className:"close-search",onClick:s,children:"Close"})}),Object(m.jsx)("div",{className:"search-books-input-wrapper",children:Object(m.jsx)("input",{type:"text",placeholder:"Search by title or author",onChange:function(e){return n(e.target.value)}})})]}),Object(m.jsx)("div",{className:"search-books-results",children:Object(m.jsx)("ol",{className:"books-grid",children:c.length>0?c.map((function(t){return Object(m.jsx)(v,{book:t,onShelfUpdate:e.onShelfUpdate},t.id)})):Object(m.jsx)("p",{children:"No book to display"})})})]})},B=function(e){Object(h.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={books:[],searchedBooks:[]},e.updateShelf=function(t,o){p(t,o).then((function(n){"none"===o?(t.shelf=o,e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t.id}))}}))):(t.shelf=o,e.setState((function(e){return{books:e.books.filter((function(e){return e.id!==t.id})).concat(t)}})))})).catch((function(e){return e}))},e.searchBook=Object(j.a)(500,!1,(function(t){t.length>0?x(t.trim()).then((function(t){t.length>0?e.setState({searchedBooks:t}):e.setState({searchedBooks:[]})})):e.setState({searchedBooks:[]})})),e.resetSearch=function(){e.setState({searchedBooks:[]})},e}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(f,"/books"),{headers:O}).then((function(e){return e.json()})).then((function(e){return e.books})).then((function(t){e.setState((function(){return{books:t}}))})).catch((function(e){return e}))}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(m.jsx)(y,{books:e.state.books,onShelfUpdate:e.updateShelf})}}),Object(m.jsx)(b.a,{path:"/searchPage",render:function(t){t.history;return Object(m.jsx)(U,{onShelfUpdate:e.updateShelf,onSearchBook:e.searchBook,searchedBooks:e.state.searchedBooks,books:e.state.books,onResetSearch:e.resetSearch})}})]})}}]),o}(s.a.Component);o(34);a.a.render(Object(m.jsx)(r.a,{children:Object(m.jsx)(B,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.29c75fdc.chunk.js.map