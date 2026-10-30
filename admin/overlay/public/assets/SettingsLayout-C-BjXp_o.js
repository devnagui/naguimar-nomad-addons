import{c as e,u as c,j as a}from"./app-CkumpmdD.js";import{S as i}from"./StyledSidebar-DHZYACjQ.js";import{g as l}from"./navigation-Bf-TSxZo.js";import{u as d}from"./useServiceInstalledStatus-Dj1RNDal.js";import{u as m}from"./useCreatorPacks-r1Z17HEG.js";import{S as p}from"./service_names-CfmN8D4G.js";import{a4 as h,M as g,a3 as u,N as f,a5 as v}from"./StyledModal-BCHgeyQF.js";import{I as k}from"./IconChartBar-CviMvJX-.js";import{I as y}from"./IconMapRoute-CHf29Jh_.js";/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]],I=e("outline","adjustments","Adjustments",M);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=[["path",{d:"M9 12h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v3h-6v-3",key:"svg-0"}],["path",{d:"M9 21h6",key:"svg-1"}],["path",{d:"M9 18h6",key:"svg-2"}]],N=e("outline","arrow-big-up-lines","ArrowBigUpLines",S);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M10 13a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M13.45 11.55l2.05 -2.05",key:"svg-1"}],["path",{d:"M6.4 20a9 9 0 1 1 11.2 0l-11.2 0",key:"svg-2"}]],b=e("outline","dashboard","Dashboard",_);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2",key:"svg-0"}]],A=e("outline","folder","Folder",x);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M13 10l7.383 7.418c.823 .82 .823 2.148 0 2.967a2.11 2.11 0 0 1 -2.976 0l-7.407 -7.385",key:"svg-0"}],["path",{d:"M6 9l4 4",key:"svg-1"}],["path",{d:"M13 10l-4 -4",key:"svg-2"}],["path",{d:"M3 21h7",key:"svg-3"}],["path",{d:"M6.793 15.793l-3.586 -3.586a1 1 0 0 1 0 -1.414l2.293 -2.293l.5 .5l3 -3l-.5 -.5l2.293 -2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414l-2.293 2.293l-.5 -.5l-3 3l.5 .5l-2.293 2.293a1 1 0 0 1 -1.414 0",key:"svg-4"}]],C=e("outline","gavel","Gavel",j);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]],D=e("outline","heart","Heart",L);/**
 * @license @tabler/icons-react v3.36.1 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0",key:"svg-0"}],["path",{d:"M21 21l-6 -6",key:"svg-1"}]],w=e("outline","zoom","Zoom",E);function H({children:t}){const{aiAssistantName:s}=c().props,n=d(p.OLLAMA),{configured:o}=m(),r=[...n.isInstalled?[{name:s,href:"/settings/models",icon:h,current:!1}]:[],{name:"Supply Depot",href:"/supply-depot",icon:g,current:!1},{name:"Benchmark",href:"/settings/benchmark",icon:k,current:!1},{name:"Content Explorer",href:"/settings/zim/remote-explorer",icon:w,current:!1},{name:"Content Manager",href:"/settings/zim",icon:A,current:!1},...o?[{name:"Creator Packs",href:"/settings/creator-packs",icon:u,current:!1}]:[],{name:"Maps Manager",href:"/settings/maps",icon:y,current:!1},{name:"Service Logs & Metrics",href:l("9999"),icon:b,current:!1,target:"_blank"},{name:"Check for Updates",href:"/settings/update",icon:N,current:!1},{name:"System",href:"/settings/system",icon:f,current:!1},{name:"Advanced",href:"/settings/advanced",icon:I,current:!1},{name:"API Reference",href:"/reference",icon:v,current:!1},{name:"Support the Project",href:"/settings/support",icon:D,current:!1},{name:"Legal Notices",href:"/settings/legal",icon:C,current:!1}];return a.jsxDEV("div",{className:"min-h-screen flex flex-row bg-surface-secondary/90",children:[a.jsxDEV(i,{title:"Settings",items:r},void 0,!1,{fileName:"D:/dev/agent-workspace/project-nomad/admin/inertia/layouts/SettingsLayout.tsx",lineNumber:61,columnNumber:7},this),t]},void 0,!0,{fileName:"D:/dev/agent-workspace/project-nomad/admin/inertia/layouts/SettingsLayout.tsx",lineNumber:60,columnNumber:5},this)}export{N as I,H as S,A as a};
