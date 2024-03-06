"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[2392],{2687:(e,t,n)=>{n.d(t,{c:()=>r});n(1504);var s=n(4357),a=n(308),i=n(7624);function r(e){const{metadata:t}=e,{previousPage:n,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.G)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,i.jsx)(a.c,{permalink:n,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),r&&(0,i.jsx)(a.c,{permalink:r,title:(0,i.jsx)(s.c,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},992:(e,t,n)=>{n.d(t,{c:()=>r});n(1504);var s=n(3152),a=n(7792),i=n(7624);function r(e){let{items:t,component:n=a.c}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(s.E,{content:t,children:(0,i.jsx)(n,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},2948:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});n(1504);var s=n(5456),a=n(4357),i=n(5944),r=n(5756),l=n(5864),o=n(867),c=n(9452),d=n(2687),g=n(8712),u=n(992),h=n(1528),p=n(6448),m=n(7624);function x(e){const t=function(){const{selectMessage:e}=(0,i.A)();return t=>e(t,(0,a.G)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,a.G)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const n=x(t);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.U7,{title:n}),(0,m.jsx)(g.c,{tag:"blog_tags_posts"})]})}function b(e){let{tag:t,items:n,sidebar:s,listMetadata:i}=e;const r=x(t);return(0,m.jsxs)(c.c,{sidebar:s,children:[t.unlisted&&(0,m.jsx)(h.c,{}),(0,m.jsxs)("header",{className:"margin-bottom--xl",children:[(0,m.jsx)(p.c,{as:"h1",children:r}),(0,m.jsx)(o.c,{href:t.allTagsPath,children:(0,m.jsx)(a.c,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,m.jsx)(u.c,{items:n}),(0,m.jsx)(d.c,{metadata:i})]})}function f(e){return(0,m.jsxs)(r.cr,{className:(0,s.c)(l.W.wrapper.blogPages,l.W.page.blogTagPostListPage),children:[(0,m.jsx)(j,{...e}),(0,m.jsx)(b,{...e})]})}},1528:(e,t,n)=>{n.d(t,{c:()=>h});n(1504);var s=n(5456),a=n(4357),i=n(6952),r=n(7624);function l(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(a.c,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.c,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(5864),g=n(304);function u(e){let{className:t}=e;return(0,r.jsx)(g.c,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,s.c)(t,d.W.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(u,{...e})]})}}}]);