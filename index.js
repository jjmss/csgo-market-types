/**
 * @description Different level of warnings
 * @since 1.0.0
 */
exports.WARNING_LEVELS = {
	CRITICAL: 1,
	ERROR: 2,
	WARNING: 3,
	INFO: 4,
};

/**
 * @description Where the warning should be displayed
 * @since 1.0.0
 */
exports.WARNING_TYPES = {
	USER_MESSAGE: 1,
	SITE_MESSAGE: 2,
	SETTINGS_PAGE: 3,
	ITEM_PAGE: 4,
	ACCOUNT_PAGE: 5,
};

/**
 * @description Authentication scopes
 * @since 1.0.2
 */
exports.SCOPES = {
	READ: {
		USER: "read:user",
		USERS: "read:users",
		LISTINGS: "read:listings",
		OTHERS_CONVERSATIONS: "read:othersConversations",
	},
	CREATE: {
		CONVERSATION: "create:conversation",
		LISTING: "create:listing",
		MESSAGE: "create:message",
	},
	EDIT: {
		LISTING: "edit:listing",
		LISTINGS: "edit:listings",
		PROFILE: "edit:profile",
	},
	DELETE: {
		LISTING: "delete:listing",
		LISTINGS: "delete:listings",
	},
};

/**
 * @description Different publication states for listings
 * @since 1.0.2
 */
exports.PUBLICATION_STATE = {
	/**
	 * @description Everyone can see it
	 */
	PUBLIC: 0,

	/**
	 * @description Only people with the link can see it
	 */
	PRIVATE: 1,

	/**
	 * @description Only you can see it
	 */
	UNLISTED: 2,
};
