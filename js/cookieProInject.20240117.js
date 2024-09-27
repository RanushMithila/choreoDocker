/*
 * Copyright (c) 2022, WSO2 LLC. (http://www.wso2.com). All Rights Reserved.
 * 
 * This software is the property of WSO2 Inc. and its suppliers, if any.
 * Dissemination of any information or reproduction of any material contained
 * herein is strictly forbidden, unless permitted by WSO2 in accordance with
 * the WSO2 Commercial License available at http://wso2.com/licenses.
 * For specific language governing the permissions and limitations under
 * this license, please see the license as well as any agreement you’ve
 * entered into with WSO2 governing the purchase of this software and any
 * associated services.
 */

var __isChoreoDevEnvironment = window.__RUNTIME_CONFIG__.SENTRY_ENV === 'V2_DEV';
var __isChoreoStageEnvironment = window.__RUNTIME_CONFIG__.SENTRY_ENV === 'V2_STAGE';
var __isChoreoProdEnvironment = window.__RUNTIME_CONFIG__.SENTRY_ENV === 'V2_PROD';
function appendCookieProSnippet() {
  var cookie_pro_script_tag = document.createElement('script');
  cookie_pro_script_tag.setAttribute('src', 'https://cookie-cdn.cookiepro.com/scripttemplates/otSDKStub.js');
  cookie_pro_script_tag.setAttribute('type', 'text/javascript');
  if (__isChoreoDevEnvironment) {
    cookie_pro_script_tag.setAttribute('data-domain-script', '71d564ba-5462-4379-9381-c3f4b8278312-test');
  } else if (__isChoreoStageEnvironment) {
    cookie_pro_script_tag.setAttribute('data-domain-script', '71d564ba-5462-4379-9381-c3f4b8278312-test');
  } else if (__isChoreoProdEnvironment) {
    cookie_pro_script_tag.setAttribute('data-domain-script', '71d564ba-5462-4379-9381-c3f4b8278312');
  }
  cookie_pro_script_tag.setAttribute('charset', 'UTF-8');
  document.head.appendChild(cookie_pro_script_tag);
}
(function () {
  if (__isChoreoDevEnvironment || __isChoreoProdEnvironment || __isChoreoStageEnvironment) {
    appendCookieProSnippet();
  }
})()
