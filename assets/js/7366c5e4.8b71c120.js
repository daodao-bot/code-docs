"use strict";(self.webpackChunkcode_docs=self.webpackChunkcode_docs||[]).push([[7748],{3428:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>t});var n=d(7624),c=d(2172);const i={description:"\u63cf\u8ff0\uff1aSquid\u662f\u4e00\u4e2a\u652f\u6301HTTP\u3001HTTPS\u3001FTP\u7b49\u7684Web\u7f13\u5b58\u4ee3\u7406\u3002\u5b83\u901a\u8fc7\u7f13\u5b58\u548c\u91cd\u7528\u7ecf\u5e38\u8bf7\u6c42\u7684\u7f51\u9875\u6765\u51cf\u5c11\u5e26\u5bbd\u5e76\u63d0\u9ad8\u54cd\u5e94\u65f6\u95f4\u3002"},r="squid",a={id:"demo/devops/squid",title:"squid",description:"\u63cf\u8ff0\uff1aSquid\u662f\u4e00\u4e2a\u652f\u6301HTTP\u3001HTTPS\u3001FTP\u7b49\u7684Web\u7f13\u5b58\u4ee3\u7406\u3002\u5b83\u901a\u8fc7\u7f13\u5b58\u548c\u91cd\u7528\u7ecf\u5e38\u8bf7\u6c42\u7684\u7f51\u9875\u6765\u51cf\u5c11\u5e26\u5bbd\u5e76\u63d0\u9ad8\u54cd\u5e94\u65f6\u95f4\u3002",source:"@site/docs/demo/devops/squid.md",sourceDirName:"demo/devops",slug:"/demo/devops/squid",permalink:"/docs/demo/devops/squid",draft:!1,unlisted:!1,editUrl:"https://github.com/daodao-bot/code-docs/tree/main/docs/demo/devops/squid.md",tags:[],version:"current",frontMatter:{description:"\u63cf\u8ff0\uff1aSquid\u662f\u4e00\u4e2a\u652f\u6301HTTP\u3001HTTPS\u3001FTP\u7b49\u7684Web\u7f13\u5b58\u4ee3\u7406\u3002\u5b83\u901a\u8fc7\u7f13\u5b58\u548c\u91cd\u7528\u7ecf\u5e38\u8bf7\u6c42\u7684\u7f51\u9875\u6765\u51cf\u5c11\u5e26\u5bbd\u5e76\u63d0\u9ad8\u54cd\u5e94\u65f6\u95f4\u3002"},sidebar:"demoSidebar",previous:{title:"nginx",permalink:"/docs/demo/devops/nginx"},next:{title:"markdown",permalink:"/docs/category/markdown"}},o={},t=[{value:"\u9700\u6c42",id:"\u9700\u6c42",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"squid",children:"squid"}),"\n",(0,n.jsxs)(s.p,{children:["\u5b98\u7f51\uff1a",(0,n.jsx)(s.a,{href:"http://www.squid-cache.org/",children:"Squid"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u9700\u6c42",children:"\u9700\u6c42"}),"\n",(0,n.jsx)(s.p,{children:"\u9700\u8981\u8bbf\u95ee\u5916\u7f51\u7684\u670d\u52a1\u5668\uff0c\u4f46\u662f\u670d\u52a1\u5668\u6ca1\u6709\u5916\u7f51\u8bbf\u95ee\u6743\u9650\uff0c\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u8bbf\u95ee\u5916\u7f51\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u6bd4\u5982\u5728\u6784\u5efa Docker \u955c\u50cf\u7684\u65f6\u5019\uff0c\u9700\u8981\u4ece\u5916\u7f51\u4e0b\u8f7d\u8f6f\u4ef6\u5305\uff0c\u4f46\u662f\u670d\u52a1\u5668\u6ca1\u6709\u5916\u7f51\u8bbf\u95ee\u6743\u9650\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u8bbf\u95ee\u5916\u7f51\u3002"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,n.jsx)(s.p,{children:"\u5728\u53ef\u4ee5\u8bbf\u95ee\u76ee\u6807\u8d44\u6e90\u7684\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 squid \u4ee3\u7406\u670d\u52a1\u5668\u3002"}),"\n",(0,n.jsx)(s.p,{children:"\u6bd4\u5982\u5728 HK \u7684\u670d\u52a1\u5668\u4e0a\u5b89\u88c5 squid \u4ee3\u7406\u670d\u52a1\u5668\uff0c\u7136\u540e\u5728 BJ \u7684\u670d\u52a1\u5668\u4e0a\u914d\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\u3002"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"\u90e8\u7f72",children:"\u90e8\u7f72"}),"\n",(0,n.jsx)(s.p,{children:"\u5728 HK \u7684\u670d\u52a1\u5668\u4e0a\u4f7f\u7528 docker \u90e8\u7f72 squid \u4ee3\u7406\u670d\u52a1\u5668\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"mkdir -p /etc/squid/conf.d\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5b89\u88c5 httpd-tools \u5e76\u751f\u6210\u7528\u6237\u540d\u548c\u5bc6\u7801\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"yum install -y httpd-tools\nhtpasswd -c /etc/squid/conf.d/passwd daodao\n# \u8f93\u5165\u5bc6\u7801\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"cat > /etc/squid/conf.d/debian.conf <<EOF\nhttp_access allow localnet\nauth_param basic program /usr/lib/squid/basic_ncsa_auth /etc/squid/conf.d/passwd\nacl auth proxy_auth REQUIRED\nhttp_access deny !auth\nhttp_access allow auth\nEOF\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"docker run -d --name squid --restart=always -e TZ=Asia/Shanghai -p 3128:3128 -v /etc/squid/conf.d/:/etc/squid/conf.d/ ubuntu/squid\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5728 BJ \u7684\u670d\u52a1\u5668\u4e0a\u53ef\u4ee5\u5728\u73af\u5883\u53d8\u91cf\u4e0a\u914d\u7f6e\u4ee3\u7406\u670d\u52a1\u5668\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"export http_proxy=http://$ip:3128\nexport https_proxy=http://$ip:3128\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u6216\u8005\u5728\u547d\u4ee4\u884c\u4e0a\u4f7f\u7528 -x \u53c2\u6570\u6307\u5b9a\u4ee3\u7406\u670d\u52a1\u5668\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sh",children:"curl -i -x $ip:3128 -U daodao:$password https://google.com\n"})})]})}function h(e={}){const{wrapper:s}={...(0,c.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}}}]);