import { APP_NAME, APP_URL, LANDING_PAGE_URL, DEBT_TOKEN, DEBT_TOKEN_SHORT, LIQUID_TOKEN, CURRENCY_SIGN, VESTING_TOKEN } from 'config/client_config';
/**
 * see: app/locales/README.md
 */
const en = 	{
	// this variables mainly used in navigation section
	about: "About",
	explore: "Explore",
	APP_NAME_whitepaper: APP_NAME + " Whitepaper",
	buy_LIQUID_TOKEN: 'Buy ' + LIQUID_TOKEN,
	sell_LIQUID_TOKEN: 'Sell ' + LIQUID_TOKEN,
	market: "Market",
	currency_market: "Currency Market",
	stolen_account_recovery: "Stolen Accounts Recovery",
	change_account_password: "Change Account Password",
	steemit_api_docs: "Steemit API Docs",
	APP_NAME_chat: APP_NAME + " Chat",
	witnesses: "Witnesses",
	vote_for_witnesses: "Vote for Witnesses",
	privacy_policy: "Privacy Policy",
	terms_of_service: "Terms of Service",
	sign_up: "Sign Up",
	/* end navigation */
	buy: 'Buy',
	sell: 'Sell',
	buy_VESTING_TOKEN: 'Buy ' + VESTING_TOKEN,
	transaction_history: 'Transaction History',
	submit_a_story: 'Submit a Story',
	nothing_yet: 'Nothing yet',
	close: 'Close',
	// next 5 strings were supposed to be sinngle block of text, but due large size,
	// code erros they were splitted.
	authors_get_paid_when_people_like_you_upvote_their_post: 'Authors get paid when people like you upvote their post',
	if_you_enjoyed_what_you_read_earn_amount: 'If you enjoyed what you read here, earn {amount} ' + VESTING_TOKEN,
	when_you: "when you",
	when_you_link_text: 'Sign Up',
	and_vote_for_it: 'and vote for it',
	read_only_mode: 'Due to server maintenance we are running in read only mode. We are sorry for the inconvenience.',
	membership_invitation_only: 'Membership to ' + APP_URL + ' is now under invitation only because of unexpectedly high sign up rate.',
	submit_email_to_get_on_waiting_list: 'Submit your email to get on the waiting list',
	login: 'Login',
	logout: 'Logout',
	show_less_low_value_posts: "Show less low value posts",
	show_more_low_value_posts: "Show more low value posts",
	select_topic: 'Select Topic',
	tags_and_topics: "Tags and Topics",
	filter: "Filter",
	show_more_topics: "Show more topics",
	we_require_social_account: APP_NAME + ' funds each account with over {signup_bonus} worth of ' + VESTING_TOKEN + '; to prevent abuse, we require new users to login via social media.',
	personal_info_will_be_private: 'Your personal information will be kept',
	personal_info_will_be_private_link: 'Private',
	continue_with_facebook: 'Continue with Facebook',
	continue_with_reddit: 'Continue with Reddit',
	continue_with_vk: 'Continue with Vk',
	requires_positive_karma: 'requires positive Reddit comment karma',
	dont_have_facebook: 'Don\'t have a Facebook or Reddit account?',
	subscribe_to_get_sms_confirm: 'Subscribe to get a notification when SMS confirmation is available',
	by_verifying_you_agree: 'By verifying your account you agree to the ' + APP_NAME,
	by_verifying_you_agree_terms_and_conditions: 'terms and conditions',
	terms_and_conditions: 'Terms and Conditions',
	// this is from top-right dropdown menu
	hot: 'hot',
	trending: 'trending',
	payout_time: 'payout time',
	active: 'active',
	responses: 'responses',
	popular: 'popular',
	/* end dropdown menu */
	loading: 'Loading',
	cryptography_test_failed: 'Cryptography test failed',
	unable_to_log_you_in: 'We will be unable to log you in with this browser',
	// next 3 blocks will be used in conjunction
	/* this is how it will look like:
	'The latest versions of <a href="https://www.google.com/chrome/">Chrome</a> and <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> are well tested and known to work with steemit.com.' */
	the_latest_versions_of: 'The latest versions of',
	and: 'and',
	are_well_tested_and_known_to_work_with: 'are well tested and known to work with ' + APP_URL + '.',
	account_creation_succes: 'Your account has been successfully created!',
	account_recovery_succes: 'Your account has been successfully recovered!',
	password_update_succes: 'The password for {accountName} was successfully updated',
	password_is_bound_to_your_accounts_owner_key: "This password is bound to your account\'s owner key and can not be used to login to this site",
	however_you_can_use_it_to: "However, you can use it to",
	to_obtaion_a_more_secure_set_of_keys: "to obtain a more secure set of keys",
	update_your_password: 'update your password',
	enter_username: 'Enter your username',
	password_or_wif: 'Password or WIF',
	requires_auth_key: 'This operation requires your {authType} key (or use your master password)',
	keep_me_logged_in: 'Keep me logged in',
	// this are used mainly in "submit a story" form
	title: "Title",
	write_your_story: 'Write your story',
	editor: 'Editor',
	reply: 'Reply',
	edit: 'Edit',
	delete: 'Delete',
	cancel: 'Cancel',
	clear: 'Clear',
	save: 'Save',
	upvote_post: 'Upvote post',
	update_post: 'Update Post',
	markdown_is_supported: 'Styling with Markdown is supported',
	preview: 'Preview',
	markdown_not_supported: 'Markdown is not supported here',
	welcome_to_the_blockchain: 'Welcome to the Blockchain!',
	your_voice_is_worth_something: 'Your voice is worth something',
	learn_more: 'Learn More',
	get_sp_when_sign_up: 'Get {signupBonus} of ' + VESTING_TOKEN + ' when you sign up today.',
	all_accounts_refunded: 'All Recovered Accounts have been fully Refunded',
	APP_URL_is_now_open_source: APP_URL + ' is now Open Source',
	// this is mainly from ReplyEditor
	tag_your_story: 'Tag (up to 5 tags), the first tag is your main category.',
	select_a_tag: 'Select a tag',
	required: 'Required',
	shorten_title: 'Shorten title',
	exceeds_maximum_length: 'Exceeds maximum length ({maxKb}KB)',
	including_the_category: "(including the category '{rootCategory}')",
	use_limited_amount_of_tags: 'You have {tagsLength} tags total {includingCategory}.  Please use only 5 in your post and category line.',
	// this is mainly used in CategorySelector
	maximum_tag_length_is_24_characters: 'Maximum tag length is 24 characters',
	use_limitied_amount_of_categories: 'Please use only {amount} categories',
	use_only_lowercase_letters: 'Use only lowercase letters',
	use_one_dash: 'Use only one dash',
	use_spaces_to_separate_tags: 'Use spaces to separate tags',
	use_only_allowed_characters: 'Use only lowercase letters, digits and one dash',
	must_start_with_a_letter: 'Must start with a letter',
	must_end_with_a_letter_or_number: 'Must end with a letter or number',
	// tags page
	tag: 'Tag',
	replies: 'Replies',
	payouts: 'Payouts',
	need_password_or_key: 'You need a private password or key (not a public key)',
	// BlocktradesDeposit
	change_deposit_address: 'Change Deposit Address',
	get_deposit_address: 'Get Deposit Address',
	// for example 'powered by Blocktrades'
	powered_by: 'Powered by',
	send_amount_of_coins_to: 'Send {value} {coinName} to',
	amount_is_in_form: 'Amount is in the form 99999.999',
	insufficent_funds: 'Insufficent funds',
	update_estimate: 'Update Estimate',
	get_estimate: 'Get Estimate',
	memo: 'Memo',
	must_include_memo: 'You must include the memo above',
	estimate_using: 'Estimate using',
	amount_to_send: 'Amount to send {estimateInputCoin}',
	deposit_using: 'Deposit using', // example: 'deposit using Steem Power' // TODO: is this example right?
	suggested_limit: 'Suggested limit {depositLimit}',
	internal_server_error: 'Internal Server Error',
	enter_amount: 'Enter Amount',
	processing: 'Processing',
	broadcasted: 'Broadcasted',
	confirmed: 'Confirmed',
	remove: 'Remove',
	collapse_or_expand: "Collapse/Expand",
	reveal_comment: 'Reveal comment',
	are_you_sure: 'Are you sure?',
	// PostFull.jsx
	by: 'by',
	in: 'in',
	share: 'Share',
	in_reply_to: 'in reply to',
	replied_to: 'replied to',
	transfer_amount_to_VESTING_TOKEN: "Transfer {amount} to " + VESTING_TOKEN,
	transfer_amount_VESTING_TOKEN_to: "Transfer {amount} " + VESTING_TOKEN + " to",
	recieve_amount_VESTING_TOKEN_from: "Receive {amount} " + VESTING_TOKEN + " from",
	transfer_amount_VESTING_TOKEN_from_to: "Transfer {amount} " + VESTING_TOKEN + " from {from} to",
	transfer_amount_to: "Transfer {amount} to",
	recieve_amount_from: "Receive {amount} from",
	transfer_amount_from: "Transfer {amount} from",
	stop_power_down: "Stop power down",
	start_power_down_of: "Start power down of",
	curation_reward_of_VESTING_TOKEN_for: 'Curation reward of {reward} ' + VESTING_TOKEN + ' for',
	author_reward_of_VESTING_TOKEN_for: 'Author reward of {payout} and {reward} ' + VESTING_TOKEN + ' for',
	recieve_interest_of: 'Receive interest of {interest}',
	// TODO find where this is used and write an example
	from: 'from',
	to: 'to',
	account_not_found: 'Account not found',
	this_is_wrong_password: 'This is the wrong password',
	do_you_need_to: 'Do you need to',
	recover_your_account: 'recover your account', // this probably will end with question mark
	reset_usernames_password: "Reset {username}\'s Password",
	this_will_update_usernames_authtype_key: 'This will update {username} {authType} key',
	the_rules_of_APP_NAME: "The first rule of " + APP_NAME + " is: Do not lose your password.<br /> The second rule of " + APP_NAME + " is: Do <strong>not</strong> lose your password.<br /> The third rule of " + APP_NAME + " is: We cannot recover your password.<br /> The fourth rule: If you can remember the password, it&apos;s not secure.<br /> The fifth rule: Use only randomly-generated passwords.<br /> The sixth rule: Do not tell anyone your password.<br /> The seventh rule: Always back up your password.",
	account_name: 'Account Name',
	recover_password: 'Recover Account',
	current_password: 'Current Password',
	recent_password: 'Recent Password',
	generated_password: 'Generated Password',
	recover_account: 'Recover Account',
	new: 'new', // ex. 'Generated Password (new)', but not exclusively
	backup_password_by_storing_it: 'Back it up by storing in your password manager or a text file',
	click_to_generate_password: 'Click to generate password',
	re_enter_generate_password: 'Re-enter Generated Password',
	understand_that_APP_NAME_cannot_recover_password: 'I understand that ' + APP_NAME + ' cannot recover lost passwords',
	i_saved_password: 'I have securely saved my generated password',
	update_password: 'Update Password',
	password_must_be_characters_or_more: 'Password must be {amount} characters or more',
	passwords_do_not_match: 'Passwords do not match',
	you_need_private_password_or_key_not_a_public_key: 'You need a private password or key (not a public key)',
	account_updated: 'Account Updated',
	warning: 'warning',
	your_password_permissions_were_reduced: 'Your password permissions were reduced',
	if_you_did_not_make_this_change: 'If you did not make this change please',
	owhership_changed_on: 'Ownership Changed On',
	deadline_for_recovery_is: 'Deadline for recovery is',
	i_understand_dont_show_again: "I understand, don't show me again",
	ok: 'Ok',
	convert_to_LIQUID_TOKEN: 'Convert to ' + LIQUID_TOKEN,
	DEBT_TOKEN_will_be_unavailable: 'This action will take place one week from now and can not be canceled. These ' + DEBT_TOKEN + ' will immediatly become unavailable',
	amount: 'Amount',
	convert: 'Convert',
	invalid_amount: 'Invalid amount',
	insufficent_balance: 'Insufficient balance',
	in_week_convert_DEBT_TOKEN_to_LIQUID_TOKEN: 'In one week, convert {amount} ' + DEBT_TOKEN + 's into ' + LIQUID_TOKEN,
	order_placed: 'Order placed', // ex.: "Order placed: Sell {someamount_to_sell} for atleast {min_to_receive}"
	follow: 'Follow',
	unfollow: 'Unfollow',
	mute: 'Mute',
	unmute: 'Unmute',
	confirm_password: 'Confirm Password',
	login_to_see_memo: 'login to see memo',
	post: 'Post', // places used: tooltip in MediumEditor
	unknown: 'Unknown', // exp.: 'unknown error'
	account_name_is_not_available: 'Account name is not available',
	type: 'Type',
	price: 'Price',
	// Market.jsx
	last_price: 'Last price',
	'24h_volume': '24h volume',
	bid: 'Bid',
	ask: 'Ask',
	spread: 'Spread',
	total: 'Total',
	available: 'Available',
	lowest_ask: 'Lowest ask',
	highest_bid: 'Highest bid',
	buy_orders: 'Buy Orders',
	sell_orders: 'Sell Orders',
	trade_history: 'Trade History',
	open_orders: 'Open Orders',
	sell_amount_for_atleast: 'Sell {amount_to_sell} for at least {min_to_receive} ({effectivePrice})',
	buy_atleast_amount_for: 'Buy at least {min_to_receive} for {amount_to_sell} ({effectivePrice})',
	higher: 'Higher', // context is about prices
	lower: 'Lower', // context is about prices
	total_DEBT_TOKEN_SHORT_CURRENCY_SIGN: "Total " + DEBT_TOKEN_SHORT + ' (' + CURRENCY_SIGN + ')',
	// RecoverAccountStep1.jsx // recover account stuff
	not_valid: 'Not valid',
	account_name_is_not_found: 'Account name is not found',
	unable_to_recover_account_not_change_ownership_recently: 'We are unable to recover this account, it has not changed ownership recently.',
	password_not_used_in_last_days: 'This password was not used on this account in the last 30 days.',
	request_already_submitted_contact_support: 'Your request has been already submitted and we are working on it. Please contact t@cyber.fund for the status of your request.',
	recover_account_intro: "From time to time, a Steemian’s owner key may be compromised. Stolen Account Recovery gives the rightful account owner 30 days to recover their account from the moment the thief changed their owner key. Stolen Account Recovery can only be used on " + APP_URL + " if the account owner had perviously listed ‘" + APP_NAME + "’ as their account trustee and complied with " + APP_NAME + "’s Terms of Service.",
	login_with_facebook_or_reddit_media_to_verify_identity: 'Please login with Facebook or Reddit to verify your identity',
	login_with_social_media_to_verify_identity: 'Please login with {show_social_login} to verify you identity',
	enter_email_toverify_identity: 'We need to verify your identity. Please enter your email address below to begin the verification.',
	email: 'Email',
	continue_with_email: "Continue with Email",
	thanks_for_submitting_request_for_account_recovery: '<p>Thanks for submitting your request for Account Recovery using ' + APP_NAME + '’s blockchain-based multi factor authentication.</p> <p>We will respond to you as quickly as possible, however, please expect there may be some delay in response due to high volume of emails.</p> <p>Please be prepared to verify your identity.</p> <p>Regards,</p> <p>Ned Scott</p> <p>CEO Steemit</p>',
	recovering_account: 'Recovering account',
	checking_account_owner: 'Checking account owner',
	sending_recovery_request: 'Sending recovery request',
	cant_confirm_account_ownership: 'We can\'t confirm account ownership. Check your password',
	account_recovery_request_not_confirmed: "Account recovery request is not confirmed yet, please get back later, thank you for your patience.",
	vote: 'Vote', // context: to vote? (title attribute on voting button)
	witness: 'Witness',
	top_witnesses: 'Top Witnesses',
	// user's navigational menu
	feed: 'Feed',
	wallet: 'Wallet',
	blog: 'Blog',
	change_password: 'Change Password',
	// UserProfile
	unknown_account: 'Unknown Account',
	user_hasnt_made_any_posts_yet: "Looks like {name} hasn't made any posts yet!",
	user_hasnt_started_bloggin_yet: "Looks like {name} hasn't started blogging yet!",
	user_hasnt_followed_anything_yet: "Looks like {name} hasn't followed anything yet!",
	user_hasnt_had_any_replies_yet: "{name} hasn't had any replies yet",
	users_blog: "{name}'s blog",
	users_posts: "{name}'s posts",
	users_wallet: "{name}'s wallet",
	users_curation_rewards: "{name}'s curation rewards",
	users_author_rewards: "{name}'s author rewards",
	users_permissions: "{name}'s permissions",
	recent_replies_to_users_posts: "Recent replies to {name}'s posts",
	print: 'Print',
	curation_rewards: "Curation rewards",
	author_rewards: 'Author rewards',
	feeds: 'Feeds',
	rewards: 'Rewards',
	permissions: 'Permissions',
	password: 'Password',
	posts: 'Posts',
	// PLURALS
	// see locales/README.md on how to properly use them
	// context usually is about profile stats: 'User has: 3 posts, 2 followers, 5 followed'
	post_count: `{postCount, plural,
		=0 {no posts}
		one {1 post}
		other {{postCount} posts}
	}`,
	follower_count: `{followerCount, plural,
		=0 {no followers}
		one {1 follower}
		other {{followerCount} followers}
	}`,
	followed_count: `{followingCount, plural,
		=0 {not following anybody}
		one {1 following}
		other {{followingCount} following}
	}`,
	vote_count: `{voteCount, plural,
		=0 {no votes}
		one {1 votes}
		other {{voteCount} votes}
	}`,
	response_count: `{responseCount, plural,
		=0 {no responses}
		one {1 responses}
		other {{responseCount} responses}
	}`,
	reply_count: `{replyCount, plural,
		=0 {no replies}
		one {1 replies}
		other {{responseCount} replies}
	}`,
	this_is_users_reputations_score_it_is_based_on_history_of_votes: "This is {name}'s reputation score.\n\nThe reputation score is based on the history of votes received by the account, and is used to hide low quality content.",
	newer: 'Newer',
	older: 'Older',
	author_rewards_last_24_hours: 'Author rewards last 24 hours',
	daily_average_author_rewards: 'Daily average author rewards',
	author_rewards_history: 'Author Rewards History',
	balance: 'Balance',
	balances: 'Balances',
	estimate_account_value: 'Estimated Account Value',
	next_power_down_is_scheduled_to_happen_at: 'The next power down is scheduled to happen',
	transfers_are_temporary_disabled: 'Transfers are temporary disabled',
	history: 'History',
	// CurationRewards.jsx
	curation_rewards_last_24_hours: 'Curation rewards last 24 hours',
	daily_average_curation_rewards: 'Daily average curation rewards',
	estimated_curation_rewards_last_week: "Estimated curation rewards last week",
	curation_rewards_last_week: "Curation rewards last week",
	curation_rewards_history: 'Curation Rewards History',
	// Post.jsx
	now_showing_comments_with_low_ratings: 'Now showing comments with low ratings',
	hide: 'Hide',
	show: 'Show',
	sort_order: 'Sort Order',
	comments_were_hidden_due_to_low_ratings: 'Comments were hidden due to low ratings',
	we_will_be_unable_to_create_account_with_this_browser: 'We will be unable to create your ' + APP_NAME + ' account with this browser',
	you_need_to_logout_before_creating_account: 'You need to {logoutLink} before you can create another account',
	APP_NAME_can_only_register_one_account_per_verified_user: 'Please note that ' + APP_NAME + ' can only register one account per verified user',
	username: 'Username',
	couldnt_create_account_server_returned_error: "Couldn't create account. Server returned the following error",
	form_requires_javascript_to_be_enabled: 'This form requires javascript to be enabled in your browser',
	our_records_indicate_you_already_have_account: 'Our records indicate that you already have ' + APP_NAME + ' account',
	to_prevent_abuse_APP_NAME_can_only_register_one_account_per_user: 'In order to prevent abuse (each registered account costs {amount} in ' + LIQUID_TOKEN + ') ' + APP_NAME + ' can only register one account per verified user.',
	// next 3 blocks are meant to be used together
	you_can_either: 'You can either', // context 'you can either login'
	to_your_existing_account_or: 'to your existing account or', // context: 'to your existing account or send us email'
	if_you_need_a_new_account: 'if you need a new account',
	send_us_email: 'send us email',
	connection_lost_reconnecting: 'Connection lost, reconnecting',
	// Voting.jsx
	stop_seeing_content_from_this_user: 'Stop seeing content from this user',
	flagging_post_can_remove_rewards_the_flag_should_be_used_for_the_following: 'Flagging a post can remove rewards and make this material less visible. The flag should be used for the following',
	fraud_or_plagiarism: 'Fraud or Plagiarism',
	hate_speech_or_internet_trolling: 'Hate Speech or Internet Trolling',
	intentional_miss_categorized_content_or_spam: 'Intentional miss-categorized content or Spam',
	downvote: 'Downvote',
	pending_payout: 'Pending Payout',
	past_payouts: 'Past Payouts',
	more: 'more',
	remove_vote: 'Remove Vote',
	upvote: 'Upvote',
	we_will_reset_curation_rewards_for_this_post: 'will reset your curation rewards for this post',
	removing_your_vote: 'Removing your vote',
	changing_to_an_upvote: 'Changing to an Up-Vote',
	changing_to_a_downvote: 'Changing to a Down-Vote',
	confirm_flag: 'Confirm Flag',
	date_created: 'Date Created',
	search: 'Search',
	begin_recovery: "Begin Recovery",
	post_as: 'Post as', // 'Post as Misha'
	action: 'Action',
	APP_NAME_app_center: APP_NAME + ' App Center',
	witness_thread: 'witness thread',
	you_have_votes_remaining: 'You have {votesCount} votes remaining',
	you_can_vote_for_maximum_of_witnesses: 'You can vote for a maximum of 30 witnesses',
	information: 'Information',
	if_you_want_to_vote_outside_of_top_enter_account_name: 'If you would like to vote for a witness outside of the top 50, enter the account name below to cast a vote',
	view_the_direct_parent: 'View the direct parent',
	you_are_viewing_single_comments_thread_from: 'You are viewing a single comment\'s thread from',
	view_the_full_context: 'View the full context',
	this_is_a_price_feed_conversion: 'This is a price feed conversion. The one week day delay is necessary to prevent abuse from gaming the price feed average',
	your_existing_DEBT_TOKEN_are_liquid_and_transferable: 'Your existing ' + DEBT_TOKEN + ' are liquid and transferable. Instead you may wish to trade ' + DEBT_TOKEN + ' directly in this site under {link} or transfer to an external market.',
	buy_or_sell: 'Buy or Sell',
	trending_30_day: 'trending (30 day)',
	promoted: 'promoted',
	comments: 'Comments',
	topics: 'Topics',
	this_password_is_bound_to_your_accounts_private_key: 'This password is bound to your account\'s active key and can not be used to login to this page. You may use this active key on other more secure pages like the Wallet or Market pages.',
	potential_payout: 'Potential Payout',
	boost_payments: 'Boost Payments',
	authors: 'Authors',
	curators: 'Curators',
	date: 'Date',
	no_responses_yet_click_to_respond: 'No responses yet. Click to respond.',
	click_to_respond: 'Click to respond',
	new_password: 'New Password',
	paste_a_youtube_or_vimeo_and_press_enter: 'Paste a YouTube or Vimeo and press Enter',
	there_was_an_error_uploading_your_image: 'There was an error uploading your image',
	raw_html: 'Raw HTML',
	please_remove_following_html_elements: 'Please remove the following HTML elements from your post: ',
	reputation: "Reputation",
	remember_voting_and_posting_key: "Remember voting & posting key",
	// example usage: 'Autologin? yes/no'
	auto_login_question_mark: 'Auto login?',
	yes: 'Yes',
	no: 'No',
	hide_private_key: 'Hide private key',
	show_private_key: 'Show private key',
	login_to_show: 'Login to show',
	APP_NAME_cannot_recover_passwords_keep_this_page_in_a_secure_location: APP_NAME + ' cannot recover passwords. Keep this page in a secure location, such as a fireproof safe or safety deposit box.',
	APP_NAME_password_backup: APP_NAME + ' Password Backup',
	APP_NAME_password_backup_required: APP_NAME + ' Password Backup (required)',
	after_printing_write_down_your_user_name: 'After printing, write down your user name',
	public: 'Public',
	private: 'Private',
	public_something_key: 'Public {key} Key',
	private_something_key: 'Private {key} Key',
	// UserProfile > Permissions
	posting_key_is_required_it_should_be_different: 'The posting key is used for posting and voting. It should be different from the active and owner keys.',
	the_active_key_is_used_to_make_transfers_and_place_orders: 'The active key is used to make transfers and place orders in the internal market.',
	the_owner_key_is_required_to_change_other_keys: 'The owner key is the master key for the account and is required to change the other keys.',
	the_private_key_or_password_should_be_kept_offline: 'The private key or password for the owner key should be kept offline as much as possible.',
	the_memo_key_is_used_to_create_and_read_memos: 'The memo key is used to create and read memos.',
	previous: 'Previous',
	next: 'Next',
	browse: 'Browse',
	not_valid_email: 'Not valid email',
	thank_you_for_being_an_early_visitor_to_APP_NAME: 'Thank you for being an early visitor to ' + APP_NAME + '. We will get back to you at the earliest possible opportunity.',
	estimated_author_rewards_last_week: "Estimated author rewards last week",
	author_rewards_last_week: "Estimated author rewards last week",
	confirm: 'Confirm',
	canceled: 'Canceled',
	asset: "Asset",
	this_memo_is_private: 'This Memo is Private',
	this_memo_is_public: 'This Memo is Public',
	power_up: 'Power Up',
	power_down: 'Power Down',
	cancel_power_down: 'Cancel Power Down',
	transfer: 'Transfer',
	deposit: 'Deposit',
	basic: 'Basic',
	advanced: 'Advanced',
	convert_to_VESTING_TOKEN: 'Convert to ' + VESTING_TOKEN,
	transfer_to_account: 'Transfer to Account',
	buy_LIQUID_TOKEN_or_VESTING_TOKEN: 'Buy ' + LIQUID_TOKEN + ' or ' + VESTING_TOKEN,
	version: 'Version',
	about_APP_NAME: 'About ' + APP_NAME,
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid_for_creating_and_curating_content: APP_NAME + ' is a social media platform where <strong>everyone</strong>&nbsp;gets <strong>paid</strong> for creating and curating content',
	APP_NAME_is_a_social_media_platform_where_everyone_gets_paid: APP_NAME + ' is a social media platform where everyone gets paid for creating and curating content. It leverages a robust digital points system, called ' + LIQUID_TOKEN + ', that supports real value for digital rewards through market price discovery and liquidity.',
	learn_more_at_LANDING_PAGE_URL: 'Learn more at ' + LANDING_PAGE_URL,
	resources: 'Resources',
	join_our_slack: 'Join our Slack',
	APP_NAME_support: APP_NAME + ' Support',
	please_email_questions_to: 'Please email your questions to',
	sorry_your_reddit_account_doesnt_have_enough_karma: "Sorry, your Reddit account doesn't have enough Reddit Karma to qualify for a free sign up. Please add your email for a place on the waiting list",
	register_with_facebook: 'Register with Facebook',
	or_click_the_button_below_to_register_with_facebook: 'Or click the button below to register with Facebook',
	trending_24_hour: 'trending (24 hour)',
	home: 'home',
	'24_hour': '24 hour',
	'30_day': '30 day',
	flag: "Flag",
	promote: 'Promote',
	// Tips.js
	tradeable_tokens_that_may_be_transferred_anywhere_at_anytime: 'Tradeable tokens that may be transferred anywhere at anytime.',
	LIQUID_TOKEN_can_be_converted_to_VESTING_TOKEN_in_a_process_called_powering_up: LIQUID_TOKEN + ' can be converted to ' + VESTING_TOKEN + ' in a process called powering up.',
	tokens_worth_about_AMOUNT_of_LIQUID_TOKEN: 'Tokens worth about {amount} of ' + LIQUID_TOKEN + '.',
	influence_tokens_which_earn_more_power_by_holding_long_term: 'Influence tokens which earn more power by holding long term.',
	the_more_you_hold_the_more_you_influence_post_rewards: 'The more you hold the more you influence post rewards and earn for accurate voting.',
	the_estimated_value_is_based_on_a_7_day_average_value_of_LIQUID_TOKEN_in_currency: 'The estimated value is based on a 7 day average value of ' + LIQUID_TOKEN + ' in US Dollars.',
	VESTING_TOKEN_is_non_transferrable_and_will_require_2_years_and_104_payments_to_convert_back_to_LIQUID_TOKEN: VESTING_TOKEN + ' is non-transferrable and will require 2 years and 104 payments to convert back to ' + LIQUID_TOKEN + '.',
	converted_VESTING_TOKEN_can_be_sent_to_yourself_but_can_not_transfer_again: 'Converted ' + VESTING_TOKEN + ' can be sent to yourself or someone else but can not transfer again without converting back to ' + LIQUID_TOKEN + '.',
	profile: 'Profile',
	send_to_account: "Send to account",
	confirm_email: 'Confirm Email',
	authenticate_for_this_transaction: 'Authenticate for this transaction',
	login_to_your_APP_NAME_account: 'Login to your ' + APP_NAME + ' Account',
	// UserProfile > Permissions
	posting: 'Posting',
	owner: 'Owner',
	active_or_owner: 'Active or Owner',
	sign: 'Sign',
	dismiss: 'Dismiss',
	// next 3 strings are used conditionally together
	show_more: 'Show more',
	show_less: 'Show less',
	value_posts: 'value posts',
	// PormotePost.jsx
	promote_post: 'Promote Post',
	spend_your_DEBT_TOKEN_to_advertise_this_post: 'Spend your ' + DEBT_TOKEN + 's to advertise this post in the promoted content section',
	you_successdully_promoted_this_post: 'You successfully promoted this post',
	leave_this_unchecked_to_receive_half_your_reward: "Leave this unchecked to receive 1/2 your reward in " + VESTING_TOKEN + " and 1/2 in " + DEBT_TOKEN,
	pay_me_100_in_VESTING_TOKEN: 'Pay me 100% in ' + VESTING_TOKEN,
	requires_5_or_more_reddit_comment_karma: 'requires 5 or more Reddit comment karma',
	this_post_was_hidden_due_to_low_ratings: 'This post was hidden due to low ratings',
	reblogged_by: 'Resteemed by',
	reblog: "Resteem",
	updated: 'updated',
	created: 'created',
	settings: 'Settings',
	incorrect_password: 'Incorrect password',
	username_does_not_exist: 'Username does not exist',
	// string with a '.'(dot) is returned from the server, so you should add it too, despite rules
	account_name_should_start_with_a_letter: 'Account name should start with a letter.',
	account_name_should_be_shorter: 'Account name should be shorter.',
	account_name_should_be_longer: 'Account name should be longer.',
	account_name_should_have_only_letters_digits_or_dashes: 'Account name should have only letters, digits, or dashes.',
	choose_language: 'Choose language',
	choose_currency: 'Choose currency',
	crowdsale: 'Crowdsale',
	followers: 'Followers',
	following: 'Following',
	// errors
	cannot_increase_reward_of_post_within_the_last_minute_before_payout: 'Cannot increase reward of post within the last minute before payout',
	vote_currently_exists_user_must_be_indicate_a_to_reject_witness: 'vote currently exists, user must be indicate a desire to reject witness',
	only_one_APP_NAME_account_allowed_per_ip_address_every_10_minutes: 'Only one Steem account allowed per IP address every 10 minutes',
	// enter_confirm_email.jsx
	thank_you_for_providing_your_email_address: 'Thank you for providing your email address',
	to_continue_please_click_on_the_link_in_the_email_weve_sent_you: 'To continue please click on the link in the email we\'ve sent you',
	user_not_found: 'user not found',
	please_provide_your_email_address_to_continue_the_registration_process: 'Please provide your email address to continue the registration process',
	this_information_allows_steemit_to_assist_with_account_recovery_in_case_your_account_is_ever_compormised: 'This information allows Steemit to assist with Account Recovery in case your account is ever compromised',
	email_address_cannot_be_changed_at_this_moment_sorry_for_inconvenience: 'Email address cannot be changed at this moment, sorry for the inconvenience',
	continue: 'continue',
	email_address: 'Email Address',
	please_prove_an_email_address: 'Please provide an email address',
	failed_captcha_verification_please_try_again: 'Failed captcha verification, please try again',
	re_send_email: 'Re-send email',
	email_confirmation: 'Email Confirmation',
	// next 3 strings are used together
	by_verifying_you_agree_with: 'By verifying your account you agree to the',
	by_verifying_you_agree_with_privacy_policy: 'Privacy Policy',
	by_verifying_you_agree_with_privacy_policy_of_website_APP_URL: 'of ' + APP_URL,
	add_image_url: 'Profile picture url',
	saved: 'Saved',
	server_returned_error: 'server returned error',
}

export { en }