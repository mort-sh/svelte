
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SELENIUM_JAR_PATH: string;
	export const COPILOT_API_URL: string;
	export const CONDA: string;
	export const GITHUB_WORKSPACE: string;
	export const SUDO_GID: string;
	export const JAVA_HOME_11_X64: string;
	export const BLACKBIRD_MODE: string;
	export const COPILOT_AGENT_CALLBACK_URL: string;
	export const NODE: string;
	export const GITHUB_PATH: string;
	export const GITHUB_ACTION: string;
	export const COPILOT_AGENT_MCP_SERVER_TEMP: string;
	export const JAVA_HOME: string;
	export const NODE_EXTRA_CA_CERTS: string;
	export const GITHUB_RUN_NUMBER: string;
	export const RUNNER_NAME: string;
	export const GRADLE_HOME: string;
	export const GITHUB_REPOSITORY_OWNER_ID: string;
	export const COPILOT_AGENT_PR_NUMBER: string;
	export const ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: string;
	export const XDG_CONFIG_HOME: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
	export const COPILOT_AGENT_INJECTED_SECRET_NAMES: string;
	export const ANT_HOME: string;
	export const npm_config_local_prefix: string;
	export const JAVA_HOME_8_X64: string;
	export const SUDO_COMMAND: string;
	export const GITHUB_TRIGGERING_ACTOR: string;
	export const GITHUB_REF_TYPE: string;
	export const SUDO_USER: string;
	export const HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: string;
	export const ANDROID_NDK: string;
	export const BOOTSTRAP_HASKELL_NONINTERACTIVE: string;
	export const PWD: string;
	export const PIPX_BIN_DIR: string;
	export const LOGNAME: string;
	export const XDG_SESSION_TYPE: string;
	export const GITHUB_REPOSITORY_ID: string;
	export const GITHUB_ACTIONS: string;
	export const ANDROID_NDK_LATEST_HOME: string;
	export const COPILOT_AGENT_FIREWALL_ENABLE_RULESET_ALLOW_LIST: string;
	export const SYSTEMD_EXEC_PID: string;
	export const GITHUB_SHA: string;
	export const GITHUB_WORKFLOW_REF: string;
	export const POWERSHELL_DISTRIBUTION_CHANNEL: string;
	export const _: string;
	export const RUNNER_ENVIRONMENT: string;
	export const DOTNET_MULTILEVEL_LOOKUP: string;
	export const GITHUB_REF: string;
	export const COPILOT_AGENT_PR_COMMIT_COUNT: string;
	export const RUNNER_OS: string;
	export const COPILOT_AGENT_BRANCH_NAME: string;
	export const GITHUB_REF_PROTECTED: string;
	export const HOME: string;
	export const GITHUB_API_URL: string;
	export const LANG: string;
	export const RUNNER_TRACKING_ID: string;
	export const npm_package_version: string;
	export const RUNNER_ARCH: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const COPILOT_AGENT_ISSUE_NUMBER: string;
	export const RUNNER_TEMP: string;
	export const SSL_CERT_DIR: string;
	export const GITHUB_STATE: string;
	export const EDGEWEBDRIVER: string;
	export const COPILOT_AGENT_SOURCE_ENVIRONMENT: string;
	export const JAVA_HOME_21_X64: string;
	export const COPILOT_AGENT_ACTION: string;
	export const GITHUB_ENV: string;
	export const GITHUB_EVENT_PATH: string;
	export const INVOCATION_ID: string;
	export const GITHUB_EVENT_NAME: string;
	export const GITHUB_RUN_ID: string;
	export const JAVA_HOME_17_X64: string;
	export const COPILOT_AGENT_COMMIT_EMAIL: string;
	export const ANDROID_NDK_HOME: string;
	export const GITHUB_STEP_SUMMARY: string;
	export const HOMEBREW_NO_AUTO_UPDATE: string;
	export const GITHUB_ACTOR: string;
	export const npm_lifecycle_script: string;
	export const COPILOT_AGENT_FIREWALL_LOG_FILE: string;
	export const COPILOT_USE_SESSIONS: string;
	export const NVM_DIR: string;
	export const FIREWALL_RULESET_CONTENT: string;
	export const SGX_AESM_ADDR: string;
	export const GITHUB_RUN_ATTEMPT: string;
	export const COPILOT_AGENT_ONLINE_EVALUATION_DISABLED: string;
	export const COPILOT_AGENT_START_TIME_SEC: string;
	export const XDG_SESSION_CLASS: string;
	export const ANDROID_HOME: string;
	export const GITHUB_GRAPHQL_URL: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const ACCEPT_EULA: string;
	export const USER: string;
	export const CURL_CA_BUNDLE: string;
	export const GITHUB_SERVER_URL: string;
	export const PIPX_HOME: string;
	export const GECKOWEBDRIVER: string;
	export const CAROOT: string;
	export const DOTNET_SYSTEM_NET_DISABLEIPV6: string;
	export const npm_lifecycle_event: string;
	export const CHROMEWEBDRIVER: string;
	export const SHLVL: string;
	export const COPILOT_AGENT_CONTENT_FILTER_MODE: string;
	export const ANDROID_SDK_ROOT: string;
	export const VCPKG_INSTALLATION_ROOT: string;
	export const GITHUB_ACTOR_ID: string;
	export const RUNNER_TOOL_CACHE: string;
	export const ImageVersion: string;
	export const DOTNET_NOLOGO: string;
	export const XDG_SESSION_ID: string;
	export const GOROOT_1_23_X64: string;
	export const GITHUB_WORKFLOW_SHA: string;
	export const COPILOT_AGENT_FIREWALL_RULESET_ALLOW_LIST: string;
	export const GOROOT_1_24_X64: string;
	export const GITHUB_REF_NAME: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const GITHUB_JOB: string;
	export const COPILOT_FEATURE_FLAGS: string;
	export const XDG_RUNTIME_DIR: string;
	export const SSL_CERT_FILE: string;
	export const COPILOT_AGENT_DEBUG: string;
	export const AZURE_EXTENSION_DIR: string;
	export const CPD_SAVE_TRAJECTORY_OUTPUT: string;
	export const REQUESTS_CA_BUNDLE: string;
	export const npm_package_json: string;
	export const GITHUB_REPOSITORY: string;
	export const GOROOT_1_22_X64: string;
	export const ANDROID_NDK_ROOT: string;
	export const CHROME_BIN: string;
	export const COPILOT_AGENT_COMMIT_LOGIN: string;
	export const GITHUB_RETENTION_DAYS: string;
	export const JOURNAL_STREAM: string;
	export const RUNNER_WORKSPACE: string;
	export const GITHUB_ACTION_REPOSITORY: string;
	export const PATH: string;
	export const GITHUB_BASE_REF: string;
	export const GHCUP_INSTALL_BASE_PREFIX: string;
	export const CI: string;
	export const SWIFT_PATH: string;
	export const ImageOS: string;
	export const SUDO_UID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const GITHUB_REPOSITORY_OWNER: string;
	export const GITHUB_HEAD_REF: string;
	export const MAIL: string;
	export const GITHUB_ACTION_REF: string;
	export const COPILOT_MCP_ENABLED: string;
	export const ENABLE_RUNNER_TRACING: string;
	export const GITHUB_WORKFLOW: string;
	export const DEBIAN_FRONTEND: string;
	export const COPILOT_AGENT_BASE_COMMIT: string;
	export const GITHUB_OUTPUT: string;
	export const npm_node_execpath: string;
	export const AGENT_TOOLSDIRECTORY: string;
	export const OLDPWD: string;
	export const COPILOT_AGENT_TIMEOUT_MIN: string;
	export const TEST: string;
	export const VITEST: string;
	export const NODE_ENV: string;
	export const PROD: string;
	export const DEV: string;
	export const BASE_URL: string;
	export const MODE: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SELENIUM_JAR_PATH: string;
		COPILOT_API_URL: string;
		CONDA: string;
		GITHUB_WORKSPACE: string;
		SUDO_GID: string;
		JAVA_HOME_11_X64: string;
		BLACKBIRD_MODE: string;
		COPILOT_AGENT_CALLBACK_URL: string;
		NODE: string;
		GITHUB_PATH: string;
		GITHUB_ACTION: string;
		COPILOT_AGENT_MCP_SERVER_TEMP: string;
		JAVA_HOME: string;
		NODE_EXTRA_CA_CERTS: string;
		GITHUB_RUN_NUMBER: string;
		RUNNER_NAME: string;
		GRADLE_HOME: string;
		GITHUB_REPOSITORY_OWNER_ID: string;
		COPILOT_AGENT_PR_NUMBER: string;
		ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: string;
		XDG_CONFIG_HOME: string;
		MEMORY_PRESSURE_WRITE: string;
		DOTNET_SKIP_FIRST_TIME_EXPERIENCE: string;
		COPILOT_AGENT_INJECTED_SECRET_NAMES: string;
		ANT_HOME: string;
		npm_config_local_prefix: string;
		JAVA_HOME_8_X64: string;
		SUDO_COMMAND: string;
		GITHUB_TRIGGERING_ACTOR: string;
		GITHUB_REF_TYPE: string;
		SUDO_USER: string;
		HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: string;
		ANDROID_NDK: string;
		BOOTSTRAP_HASKELL_NONINTERACTIVE: string;
		PWD: string;
		PIPX_BIN_DIR: string;
		LOGNAME: string;
		XDG_SESSION_TYPE: string;
		GITHUB_REPOSITORY_ID: string;
		GITHUB_ACTIONS: string;
		ANDROID_NDK_LATEST_HOME: string;
		COPILOT_AGENT_FIREWALL_ENABLE_RULESET_ALLOW_LIST: string;
		SYSTEMD_EXEC_PID: string;
		GITHUB_SHA: string;
		GITHUB_WORKFLOW_REF: string;
		POWERSHELL_DISTRIBUTION_CHANNEL: string;
		_: string;
		RUNNER_ENVIRONMENT: string;
		DOTNET_MULTILEVEL_LOOKUP: string;
		GITHUB_REF: string;
		COPILOT_AGENT_PR_COMMIT_COUNT: string;
		RUNNER_OS: string;
		COPILOT_AGENT_BRANCH_NAME: string;
		GITHUB_REF_PROTECTED: string;
		HOME: string;
		GITHUB_API_URL: string;
		LANG: string;
		RUNNER_TRACKING_ID: string;
		npm_package_version: string;
		RUNNER_ARCH: string;
		MEMORY_PRESSURE_WATCH: string;
		COPILOT_AGENT_ISSUE_NUMBER: string;
		RUNNER_TEMP: string;
		SSL_CERT_DIR: string;
		GITHUB_STATE: string;
		EDGEWEBDRIVER: string;
		COPILOT_AGENT_SOURCE_ENVIRONMENT: string;
		JAVA_HOME_21_X64: string;
		COPILOT_AGENT_ACTION: string;
		GITHUB_ENV: string;
		GITHUB_EVENT_PATH: string;
		INVOCATION_ID: string;
		GITHUB_EVENT_NAME: string;
		GITHUB_RUN_ID: string;
		JAVA_HOME_17_X64: string;
		COPILOT_AGENT_COMMIT_EMAIL: string;
		ANDROID_NDK_HOME: string;
		GITHUB_STEP_SUMMARY: string;
		HOMEBREW_NO_AUTO_UPDATE: string;
		GITHUB_ACTOR: string;
		npm_lifecycle_script: string;
		COPILOT_AGENT_FIREWALL_LOG_FILE: string;
		COPILOT_USE_SESSIONS: string;
		NVM_DIR: string;
		FIREWALL_RULESET_CONTENT: string;
		SGX_AESM_ADDR: string;
		GITHUB_RUN_ATTEMPT: string;
		COPILOT_AGENT_ONLINE_EVALUATION_DISABLED: string;
		COPILOT_AGENT_START_TIME_SEC: string;
		XDG_SESSION_CLASS: string;
		ANDROID_HOME: string;
		GITHUB_GRAPHQL_URL: string;
		TERM: string;
		npm_package_name: string;
		ACCEPT_EULA: string;
		USER: string;
		CURL_CA_BUNDLE: string;
		GITHUB_SERVER_URL: string;
		PIPX_HOME: string;
		GECKOWEBDRIVER: string;
		CAROOT: string;
		DOTNET_SYSTEM_NET_DISABLEIPV6: string;
		npm_lifecycle_event: string;
		CHROMEWEBDRIVER: string;
		SHLVL: string;
		COPILOT_AGENT_CONTENT_FILTER_MODE: string;
		ANDROID_SDK_ROOT: string;
		VCPKG_INSTALLATION_ROOT: string;
		GITHUB_ACTOR_ID: string;
		RUNNER_TOOL_CACHE: string;
		ImageVersion: string;
		DOTNET_NOLOGO: string;
		XDG_SESSION_ID: string;
		GOROOT_1_23_X64: string;
		GITHUB_WORKFLOW_SHA: string;
		COPILOT_AGENT_FIREWALL_RULESET_ALLOW_LIST: string;
		GOROOT_1_24_X64: string;
		GITHUB_REF_NAME: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		GITHUB_JOB: string;
		COPILOT_FEATURE_FLAGS: string;
		XDG_RUNTIME_DIR: string;
		SSL_CERT_FILE: string;
		COPILOT_AGENT_DEBUG: string;
		AZURE_EXTENSION_DIR: string;
		CPD_SAVE_TRAJECTORY_OUTPUT: string;
		REQUESTS_CA_BUNDLE: string;
		npm_package_json: string;
		GITHUB_REPOSITORY: string;
		GOROOT_1_22_X64: string;
		ANDROID_NDK_ROOT: string;
		CHROME_BIN: string;
		COPILOT_AGENT_COMMIT_LOGIN: string;
		GITHUB_RETENTION_DAYS: string;
		JOURNAL_STREAM: string;
		RUNNER_WORKSPACE: string;
		GITHUB_ACTION_REPOSITORY: string;
		PATH: string;
		GITHUB_BASE_REF: string;
		GHCUP_INSTALL_BASE_PREFIX: string;
		CI: string;
		SWIFT_PATH: string;
		ImageOS: string;
		SUDO_UID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		GITHUB_REPOSITORY_OWNER: string;
		GITHUB_HEAD_REF: string;
		MAIL: string;
		GITHUB_ACTION_REF: string;
		COPILOT_MCP_ENABLED: string;
		ENABLE_RUNNER_TRACING: string;
		GITHUB_WORKFLOW: string;
		DEBIAN_FRONTEND: string;
		COPILOT_AGENT_BASE_COMMIT: string;
		GITHUB_OUTPUT: string;
		npm_node_execpath: string;
		AGENT_TOOLSDIRECTORY: string;
		OLDPWD: string;
		COPILOT_AGENT_TIMEOUT_MIN: string;
		TEST: string;
		VITEST: string;
		NODE_ENV: string;
		PROD: string;
		DEV: string;
		BASE_URL: string;
		MODE: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
