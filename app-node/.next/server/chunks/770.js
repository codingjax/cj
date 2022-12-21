"use strict";
exports.id = 770;
exports.ids = [770];
exports.modules = {

/***/ 1770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lp": () => (/* binding */ client),
/* harmony export */   "xn": () => (/* reexport safe */ _schema_generated__WEBPACK_IMPORTED_MODULE_1__.xn)
/* harmony export */ });
/* unused harmony export serverClient */
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3253);
/* harmony import */ var _schema_generated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_next__WEBPACK_IMPORTED_MODULE_0__, _schema_generated__WEBPACK_IMPORTED_MODULE_1__]);
([_faustjs_next__WEBPACK_IMPORTED_MODULE_0__, _schema_generated__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * GQTY: You can safely modify this file and Query Fetcher based on your needs
 */ 

const client = (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_0__/* .getClient */ .s3)({
    schema: _schema_generated__WEBPACK_IMPORTED_MODULE_1__/* .generatedSchema */ .U7,
    scalarsEnumsHash: _schema_generated__WEBPACK_IMPORTED_MODULE_1__/* .scalarsEnumsHash */ .__
});
function serverClient(req) {
    return getClient({
        schema: generatedSchema,
        scalarsEnumsHash,
        context: req
    });
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3289:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U7": () => (/* binding */ generatedSchema),
/* harmony export */   "__": () => (/* binding */ scalarsEnumsHash),
/* harmony export */   "xn": () => (/* binding */ MenuLocationEnum)
/* harmony export */ });
/* unused harmony exports AvatarRatingEnum, CategoryIdType, CommentsConnectionOrderbyEnum, ContentNodeIdTypeEnum, ContentTypeEnum, ContentTypeIdTypeEnum, ContentTypesOfCategoryEnum, ContentTypesOfPostFormatEnum, ContentTypesOfTagEnum, MediaItemIdType, MediaItemSizeEnum, MediaItemStatusEnum, MenuItemNodeIdTypeEnum, MenuNodeIdTypeEnum, MimeTypeEnum, OrderEnum, PageIdType, PostFormatIdType, PostIdType, PostObjectFieldFormatEnum, PostObjectsConnectionDateColumnEnum, PostObjectsConnectionOrderbyEnum, PostStatusEnum, RelationEnum, TagIdType, TaxonomyEnum, TaxonomyIdTypeEnum, TermNodeIdTypeEnum, TermObjectsConnectionOrderbyEnum, UserNodeIdTypeEnum, UserRoleEnum, UsersConnectionOrderbyEnum, UsersConnectionSearchColumnEnum */
/* harmony import */ var gqty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1676);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([gqty__WEBPACK_IMPORTED_MODULE_0__]);
gqty__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/**
 * GQTY AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */ 
var AvatarRatingEnum;
(function(AvatarRatingEnum) {
    AvatarRatingEnum[/** Indicates a G level avatar rating level. */ "G"] = "G";
    AvatarRatingEnum[/** Indicates a PG level avatar rating level. */ "PG"] = "PG";
    AvatarRatingEnum[/** Indicates an R level avatar rating level. */ "R"] = "R";
    AvatarRatingEnum[/** Indicates an X level avatar rating level. */ "X"] = "X";
})(AvatarRatingEnum || (AvatarRatingEnum = {}));
var CategoryIdType;
(function(CategoryIdType) {
    CategoryIdType[/** The Database ID for the node */ "DATABASE_ID"] = "DATABASE_ID";
    CategoryIdType[/** The hashed Global ID */ "ID"] = "ID";
    CategoryIdType[/** The name of the node */ "NAME"] = "NAME";
    CategoryIdType[/** Url friendly name of the node */ "SLUG"] = "SLUG";
    CategoryIdType[/** The URI for the node */ "URI"] = "URI";
})(CategoryIdType || (CategoryIdType = {}));
var CommentsConnectionOrderbyEnum;
(function(CommentsConnectionOrderbyEnum) {
    CommentsConnectionOrderbyEnum[/** Order by browser user agent of the commenter. */ "COMMENT_AGENT"] = "COMMENT_AGENT";
    CommentsConnectionOrderbyEnum[/** Order by true/false approval of the comment. */ "COMMENT_APPROVED"] = "COMMENT_APPROVED";
    CommentsConnectionOrderbyEnum[/** Order by name of the comment author. */ "COMMENT_AUTHOR"] = "COMMENT_AUTHOR";
    CommentsConnectionOrderbyEnum[/** Order by e-mail of the comment author. */ "COMMENT_AUTHOR_EMAIL"] = "COMMENT_AUTHOR_EMAIL";
    CommentsConnectionOrderbyEnum[/** Order by IP address of the comment author. */ "COMMENT_AUTHOR_IP"] = "COMMENT_AUTHOR_IP";
    CommentsConnectionOrderbyEnum[/** Order by URL address of the comment author. */ "COMMENT_AUTHOR_URL"] = "COMMENT_AUTHOR_URL";
    CommentsConnectionOrderbyEnum[/** Order by the comment contents. */ "COMMENT_CONTENT"] = "COMMENT_CONTENT";
    CommentsConnectionOrderbyEnum[/** Order by date/time timestamp of the comment. */ "COMMENT_DATE"] = "COMMENT_DATE";
    CommentsConnectionOrderbyEnum[/** Order by GMT timezone date/time timestamp of the comment. */ "COMMENT_DATE_GMT"] = "COMMENT_DATE_GMT";
    CommentsConnectionOrderbyEnum[/** Order by the globally unique identifier for the comment object */ "COMMENT_ID"] = "COMMENT_ID";
    CommentsConnectionOrderbyEnum[/** Order by the array list of comment IDs listed in the where clause. */ "COMMENT_IN"] = "COMMENT_IN";
    CommentsConnectionOrderbyEnum[/** Order by the comment karma score. */ "COMMENT_KARMA"] = "COMMENT_KARMA";
    CommentsConnectionOrderbyEnum[/** Order by the comment parent ID. */ "COMMENT_PARENT"] = "COMMENT_PARENT";
    CommentsConnectionOrderbyEnum[/** Order by the post object ID. */ "COMMENT_POST_ID"] = "COMMENT_POST_ID";
    CommentsConnectionOrderbyEnum[/** Order by the the type of comment, such as 'comment', 'pingback', or 'trackback'. */ "COMMENT_TYPE"] = "COMMENT_TYPE";
    CommentsConnectionOrderbyEnum[/** Order by the user ID. */ "USER_ID"] = "USER_ID";
})(CommentsConnectionOrderbyEnum || (CommentsConnectionOrderbyEnum = {}));
var ContentNodeIdTypeEnum;
(function(ContentNodeIdTypeEnum) {
    ContentNodeIdTypeEnum[/** Identify a resource by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    ContentNodeIdTypeEnum[/** Identify a resource by the (hashed) Global ID. */ "ID"] = "ID";
    ContentNodeIdTypeEnum[/** Identify a resource by the URI. */ "URI"] = "URI";
})(ContentNodeIdTypeEnum || (ContentNodeIdTypeEnum = {}));
var ContentTypeEnum;
(function(ContentTypeEnum) {
    ContentTypeEnum[/** The Type of Content object */ "ATTACHMENT"] = "ATTACHMENT";
    ContentTypeEnum[/** The Type of Content object */ "PAGE"] = "PAGE";
    ContentTypeEnum[/** The Type of Content object */ "POST"] = "POST";
})(ContentTypeEnum || (ContentTypeEnum = {}));
var ContentTypeIdTypeEnum;
(function(ContentTypeIdTypeEnum) {
    ContentTypeIdTypeEnum[/** The globally unique ID */ "ID"] = "ID";
    ContentTypeIdTypeEnum[/** The name of the content type. */ "NAME"] = "NAME";
})(ContentTypeIdTypeEnum || (ContentTypeIdTypeEnum = {}));
var ContentTypesOfCategoryEnum;
(function(ContentTypesOfCategoryEnum) {
    ContentTypesOfCategoryEnum[/** The Type of Content object */ "POST"] = "POST";
})(ContentTypesOfCategoryEnum || (ContentTypesOfCategoryEnum = {}));
var ContentTypesOfPostFormatEnum;
(function(ContentTypesOfPostFormatEnum) {
    ContentTypesOfPostFormatEnum[/** The Type of Content object */ "POST"] = "POST";
})(ContentTypesOfPostFormatEnum || (ContentTypesOfPostFormatEnum = {}));
var ContentTypesOfTagEnum;
(function(ContentTypesOfTagEnum) {
    ContentTypesOfTagEnum[/** The Type of Content object */ "POST"] = "POST";
})(ContentTypesOfTagEnum || (ContentTypesOfTagEnum = {}));
var MediaItemIdType;
(function(MediaItemIdType) {
    MediaItemIdType[/** Identify a resource by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    MediaItemIdType[/** Identify a resource by the (hashed) Global ID. */ "ID"] = "ID";
    MediaItemIdType[/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */ "SLUG"] = "SLUG";
    MediaItemIdType[/** Identify a media item by its source url */ "SOURCE_URL"] = "SOURCE_URL";
    MediaItemIdType[/** Identify a resource by the URI. */ "URI"] = "URI";
})(MediaItemIdType || (MediaItemIdType = {}));
var MediaItemSizeEnum;
(function(MediaItemSizeEnum) {
    MediaItemSizeEnum[/** MediaItem with the large size */ "LARGE"] = "LARGE";
    MediaItemSizeEnum[/** MediaItem with the medium size */ "MEDIUM"] = "MEDIUM";
    MediaItemSizeEnum[/** MediaItem with the medium_large size */ "MEDIUM_LARGE"] = "MEDIUM_LARGE";
    MediaItemSizeEnum[/** MediaItem with the thumbnail size */ "THUMBNAIL"] = "THUMBNAIL";
    MediaItemSizeEnum[/** MediaItem with the 1536x1536 size */ "_1536X1536"] = "_1536X1536";
    MediaItemSizeEnum[/** MediaItem with the 2048x2048 size */ "_2048X2048"] = "_2048X2048";
})(MediaItemSizeEnum || (MediaItemSizeEnum = {}));
var MediaItemStatusEnum;
(function(MediaItemStatusEnum) {
    MediaItemStatusEnum[/** Objects with the auto-draft status */ "AUTO_DRAFT"] = "AUTO_DRAFT";
    MediaItemStatusEnum[/** Objects with the inherit status */ "INHERIT"] = "INHERIT";
    MediaItemStatusEnum[/** Objects with the private status */ "PRIVATE"] = "PRIVATE";
    MediaItemStatusEnum[/** Objects with the trash status */ "TRASH"] = "TRASH";
})(MediaItemStatusEnum || (MediaItemStatusEnum = {}));
var MenuItemNodeIdTypeEnum;
(function(MenuItemNodeIdTypeEnum) {
    MenuItemNodeIdTypeEnum[/** Identify a resource by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    MenuItemNodeIdTypeEnum[/** Identify a resource by the (hashed) Global ID. */ "ID"] = "ID";
})(MenuItemNodeIdTypeEnum || (MenuItemNodeIdTypeEnum = {}));
var MenuLocationEnum;
(function(MenuLocationEnum) {
    MenuLocationEnum[/** Put the menu in the footer location */ "FOOTER"] = "FOOTER";
    MenuLocationEnum[/** Put the menu in the primary location */ "PRIMARY"] = "PRIMARY";
})(MenuLocationEnum || (MenuLocationEnum = {}));
var MenuNodeIdTypeEnum;
(function(MenuNodeIdTypeEnum) {
    MenuNodeIdTypeEnum[/** Identify a menu node by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    MenuNodeIdTypeEnum[/** Identify a menu node by the (hashed) Global ID. */ "ID"] = "ID";
    MenuNodeIdTypeEnum[/** Identify a menu node by it's name */ "NAME"] = "NAME";
})(MenuNodeIdTypeEnum || (MenuNodeIdTypeEnum = {}));
var MimeTypeEnum;
(function(MimeTypeEnum) {
    MimeTypeEnum[/** MimeType application/java */ "APPLICATION_JAVA"] = "APPLICATION_JAVA";
    MimeTypeEnum[/** MimeType application/msword */ "APPLICATION_MSWORD"] = "APPLICATION_MSWORD";
    MimeTypeEnum[/** MimeType application/octet-stream */ "APPLICATION_OCTET_STREAM"] = "APPLICATION_OCTET_STREAM";
    MimeTypeEnum[/** MimeType application/onenote */ "APPLICATION_ONENOTE"] = "APPLICATION_ONENOTE";
    MimeTypeEnum[/** MimeType application/oxps */ "APPLICATION_OXPS"] = "APPLICATION_OXPS";
    MimeTypeEnum[/** MimeType application/pdf */ "APPLICATION_PDF"] = "APPLICATION_PDF";
    MimeTypeEnum[/** MimeType application/rar */ "APPLICATION_RAR"] = "APPLICATION_RAR";
    MimeTypeEnum[/** MimeType application/rtf */ "APPLICATION_RTF"] = "APPLICATION_RTF";
    MimeTypeEnum[/** MimeType application/ttaf+xml */ "APPLICATION_TTAF_XML"] = "APPLICATION_TTAF_XML";
    MimeTypeEnum[/** MimeType application/vnd.apple.keynote */ "APPLICATION_VND_APPLE_KEYNOTE"] = "APPLICATION_VND_APPLE_KEYNOTE";
    MimeTypeEnum[/** MimeType application/vnd.apple.numbers */ "APPLICATION_VND_APPLE_NUMBERS"] = "APPLICATION_VND_APPLE_NUMBERS";
    MimeTypeEnum[/** MimeType application/vnd.apple.pages */ "APPLICATION_VND_APPLE_PAGES"] = "APPLICATION_VND_APPLE_PAGES";
    MimeTypeEnum[/** MimeType application/vnd.ms-access */ "APPLICATION_VND_MS_ACCESS"] = "APPLICATION_VND_MS_ACCESS";
    MimeTypeEnum[/** MimeType application/vnd.ms-excel */ "APPLICATION_VND_MS_EXCEL"] = "APPLICATION_VND_MS_EXCEL";
    MimeTypeEnum[/** MimeType application/vnd.ms-excel.addin.macroEnabled.12 */ "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12"] = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-excel.sheet.binary.macroEnabled.12 */ "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-excel.sheet.macroEnabled.12 */ "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12"] = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-excel.template.macroEnabled.12 */ "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12"] = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint */ "APPLICATION_VND_MS_POWERPOINT"] = "APPLICATION_VND_MS_POWERPOINT";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint.addin.macroEnabled.12 */ "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12"] = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint.presentation.macroEnabled.12 */ "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12"] = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 */ "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint.slide.macroEnabled.12 */ "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12"] = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-powerpoint.template.macroEnabled.12 */ "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12"] = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-project */ "APPLICATION_VND_MS_PROJECT"] = "APPLICATION_VND_MS_PROJECT";
    MimeTypeEnum[/** MimeType application/vnd.ms-word.document.macroEnabled.12 */ "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12"] = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-word.template.macroEnabled.12 */ "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12"] = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12";
    MimeTypeEnum[/** MimeType application/vnd.ms-write */ "APPLICATION_VND_MS_WRITE"] = "APPLICATION_VND_MS_WRITE";
    MimeTypeEnum[/** MimeType application/vnd.ms-xpsdocument */ "APPLICATION_VND_MS_XPSDOCUMENT"] = "APPLICATION_VND_MS_XPSDOCUMENT";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.chart */ "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.database */ "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.formula */ "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.graphics */ "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.presentation */ "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.spreadsheet */ "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET";
    MimeTypeEnum[/** MimeType application/vnd.oasis.opendocument.text */ "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT"] = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.presentationml.presentation */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.presentationml.slide */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.presentationml.slideshow */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.presentationml.template */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.spreadsheetml.template */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.document */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT";
    MimeTypeEnum[/** MimeType application/vnd.openxmlformats-officedocument.wordprocessingml.template */ "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE"] = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE";
    MimeTypeEnum[/** MimeType application/wordperfect */ "APPLICATION_WORDPERFECT"] = "APPLICATION_WORDPERFECT";
    MimeTypeEnum[/** MimeType application/x-7z-compressed */ "APPLICATION_X_7Z_COMPRESSED"] = "APPLICATION_X_7Z_COMPRESSED";
    MimeTypeEnum[/** MimeType application/x-gzip */ "APPLICATION_X_GZIP"] = "APPLICATION_X_GZIP";
    MimeTypeEnum[/** MimeType application/x-tar */ "APPLICATION_X_TAR"] = "APPLICATION_X_TAR";
    MimeTypeEnum[/** MimeType application/zip */ "APPLICATION_ZIP"] = "APPLICATION_ZIP";
    MimeTypeEnum[/** MimeType audio/aac */ "AUDIO_AAC"] = "AUDIO_AAC";
    MimeTypeEnum[/** MimeType audio/flac */ "AUDIO_FLAC"] = "AUDIO_FLAC";
    MimeTypeEnum[/** MimeType audio/midi */ "AUDIO_MIDI"] = "AUDIO_MIDI";
    MimeTypeEnum[/** MimeType audio/mpeg */ "AUDIO_MPEG"] = "AUDIO_MPEG";
    MimeTypeEnum[/** MimeType audio/ogg */ "AUDIO_OGG"] = "AUDIO_OGG";
    MimeTypeEnum[/** MimeType audio/wav */ "AUDIO_WAV"] = "AUDIO_WAV";
    MimeTypeEnum[/** MimeType audio/x-matroska */ "AUDIO_X_MATROSKA"] = "AUDIO_X_MATROSKA";
    MimeTypeEnum[/** MimeType audio/x-ms-wax */ "AUDIO_X_MS_WAX"] = "AUDIO_X_MS_WAX";
    MimeTypeEnum[/** MimeType audio/x-ms-wma */ "AUDIO_X_MS_WMA"] = "AUDIO_X_MS_WMA";
    MimeTypeEnum[/** MimeType audio/x-realaudio */ "AUDIO_X_REALAUDIO"] = "AUDIO_X_REALAUDIO";
    MimeTypeEnum[/** MimeType image/bmp */ "IMAGE_BMP"] = "IMAGE_BMP";
    MimeTypeEnum[/** MimeType image/gif */ "IMAGE_GIF"] = "IMAGE_GIF";
    MimeTypeEnum[/** MimeType image/heic */ "IMAGE_HEIC"] = "IMAGE_HEIC";
    MimeTypeEnum[/** MimeType image/jpeg */ "IMAGE_JPEG"] = "IMAGE_JPEG";
    MimeTypeEnum[/** MimeType image/png */ "IMAGE_PNG"] = "IMAGE_PNG";
    MimeTypeEnum[/** MimeType image/tiff */ "IMAGE_TIFF"] = "IMAGE_TIFF";
    MimeTypeEnum[/** MimeType image/webp */ "IMAGE_WEBP"] = "IMAGE_WEBP";
    MimeTypeEnum[/** MimeType image/x-icon */ "IMAGE_X_ICON"] = "IMAGE_X_ICON";
    MimeTypeEnum[/** MimeType text/calendar */ "TEXT_CALENDAR"] = "TEXT_CALENDAR";
    MimeTypeEnum[/** MimeType text/css */ "TEXT_CSS"] = "TEXT_CSS";
    MimeTypeEnum[/** MimeType text/csv */ "TEXT_CSV"] = "TEXT_CSV";
    MimeTypeEnum[/** MimeType text/plain */ "TEXT_PLAIN"] = "TEXT_PLAIN";
    MimeTypeEnum[/** MimeType text/richtext */ "TEXT_RICHTEXT"] = "TEXT_RICHTEXT";
    MimeTypeEnum[/** MimeType text/tab-separated-values */ "TEXT_TAB_SEPARATED_VALUES"] = "TEXT_TAB_SEPARATED_VALUES";
    MimeTypeEnum[/** MimeType text/vtt */ "TEXT_VTT"] = "TEXT_VTT";
    MimeTypeEnum[/** MimeType video/3gpp */ "VIDEO_3GPP"] = "VIDEO_3GPP";
    MimeTypeEnum[/** MimeType video/3gpp2 */ "VIDEO_3GPP2"] = "VIDEO_3GPP2";
    MimeTypeEnum[/** MimeType video/avi */ "VIDEO_AVI"] = "VIDEO_AVI";
    MimeTypeEnum[/** MimeType video/divx */ "VIDEO_DIVX"] = "VIDEO_DIVX";
    MimeTypeEnum[/** MimeType video/mp4 */ "VIDEO_MP4"] = "VIDEO_MP4";
    MimeTypeEnum[/** MimeType video/mpeg */ "VIDEO_MPEG"] = "VIDEO_MPEG";
    MimeTypeEnum[/** MimeType video/ogg */ "VIDEO_OGG"] = "VIDEO_OGG";
    MimeTypeEnum[/** MimeType video/quicktime */ "VIDEO_QUICKTIME"] = "VIDEO_QUICKTIME";
    MimeTypeEnum[/** MimeType video/webm */ "VIDEO_WEBM"] = "VIDEO_WEBM";
    MimeTypeEnum[/** MimeType video/x-flv */ "VIDEO_X_FLV"] = "VIDEO_X_FLV";
    MimeTypeEnum[/** MimeType video/x-matroska */ "VIDEO_X_MATROSKA"] = "VIDEO_X_MATROSKA";
    MimeTypeEnum[/** MimeType video/x-ms-asf */ "VIDEO_X_MS_ASF"] = "VIDEO_X_MS_ASF";
    MimeTypeEnum[/** MimeType video/x-ms-wm */ "VIDEO_X_MS_WM"] = "VIDEO_X_MS_WM";
    MimeTypeEnum[/** MimeType video/x-ms-wmv */ "VIDEO_X_MS_WMV"] = "VIDEO_X_MS_WMV";
    MimeTypeEnum[/** MimeType video/x-ms-wmx */ "VIDEO_X_MS_WMX"] = "VIDEO_X_MS_WMX";
})(MimeTypeEnum || (MimeTypeEnum = {}));
var OrderEnum;
(function(OrderEnum) {
    OrderEnum[/** Sort the query result set in an ascending order */ "ASC"] = "ASC";
    OrderEnum[/** Sort the query result set in a descending order */ "DESC"] = "DESC";
})(OrderEnum || (OrderEnum = {}));
var PageIdType;
(function(PageIdType) {
    PageIdType[/** Identify a resource by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    PageIdType[/** Identify a resource by the (hashed) Global ID. */ "ID"] = "ID";
    PageIdType[/** Identify a resource by the URI. */ "URI"] = "URI";
})(PageIdType || (PageIdType = {}));
var PostFormatIdType;
(function(PostFormatIdType) {
    PostFormatIdType[/** The Database ID for the node */ "DATABASE_ID"] = "DATABASE_ID";
    PostFormatIdType[/** The hashed Global ID */ "ID"] = "ID";
    PostFormatIdType[/** The name of the node */ "NAME"] = "NAME";
    PostFormatIdType[/** Url friendly name of the node */ "SLUG"] = "SLUG";
    PostFormatIdType[/** The URI for the node */ "URI"] = "URI";
})(PostFormatIdType || (PostFormatIdType = {}));
var PostIdType;
(function(PostIdType) {
    PostIdType[/** Identify a resource by the Database ID. */ "DATABASE_ID"] = "DATABASE_ID";
    PostIdType[/** Identify a resource by the (hashed) Global ID. */ "ID"] = "ID";
    PostIdType[/** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */ "SLUG"] = "SLUG";
    PostIdType[/** Identify a resource by the URI. */ "URI"] = "URI";
})(PostIdType || (PostIdType = {}));
var PostObjectFieldFormatEnum;
(function(PostObjectFieldFormatEnum) {
    PostObjectFieldFormatEnum[/** Provide the field value directly from database */ "RAW"] = "RAW";
    PostObjectFieldFormatEnum[/** Apply the default WordPress rendering */ "RENDERED"] = "RENDERED";
})(PostObjectFieldFormatEnum || (PostObjectFieldFormatEnum = {}));
var PostObjectsConnectionDateColumnEnum;
(function(PostObjectsConnectionDateColumnEnum) {
    PostObjectsConnectionDateColumnEnum[/** The date the comment was created in local time. */ "DATE"] = "DATE";
    PostObjectsConnectionDateColumnEnum[/** The most recent modification date of the comment. */ "MODIFIED"] = "MODIFIED";
})(PostObjectsConnectionDateColumnEnum || (PostObjectsConnectionDateColumnEnum = {}));
var PostObjectsConnectionOrderbyEnum;
(function(PostObjectsConnectionOrderbyEnum) {
    PostObjectsConnectionOrderbyEnum[/** Order by author */ "AUTHOR"] = "AUTHOR";
    PostObjectsConnectionOrderbyEnum[/** Order by the number of comments it has acquired */ "COMMENT_COUNT"] = "COMMENT_COUNT";
    PostObjectsConnectionOrderbyEnum[/** Order by publish date */ "DATE"] = "DATE";
    PostObjectsConnectionOrderbyEnum[/** Preserve the ID order given in the IN array */ "IN"] = "IN";
    PostObjectsConnectionOrderbyEnum[/** Order by the menu order value */ "MENU_ORDER"] = "MENU_ORDER";
    PostObjectsConnectionOrderbyEnum[/** Order by last modified date */ "MODIFIED"] = "MODIFIED";
    PostObjectsConnectionOrderbyEnum[/** Preserve slug order given in the NAME_IN array */ "NAME_IN"] = "NAME_IN";
    PostObjectsConnectionOrderbyEnum[/** Order by parent ID */ "PARENT"] = "PARENT";
    PostObjectsConnectionOrderbyEnum[/** Order by slug */ "SLUG"] = "SLUG";
    PostObjectsConnectionOrderbyEnum[/** Order by title */ "TITLE"] = "TITLE";
})(PostObjectsConnectionOrderbyEnum || (PostObjectsConnectionOrderbyEnum = {}));
var PostStatusEnum;
(function(PostStatusEnum) {
    PostStatusEnum[/** Objects with the auto-draft status */ "AUTO_DRAFT"] = "AUTO_DRAFT";
    PostStatusEnum[/** Objects with the draft status */ "DRAFT"] = "DRAFT";
    PostStatusEnum[/** Objects with the future status */ "FUTURE"] = "FUTURE";
    PostStatusEnum[/** Objects with the inherit status */ "INHERIT"] = "INHERIT";
    PostStatusEnum[/** Objects with the pending status */ "PENDING"] = "PENDING";
    PostStatusEnum[/** Objects with the private status */ "PRIVATE"] = "PRIVATE";
    PostStatusEnum[/** Objects with the publish status */ "PUBLISH"] = "PUBLISH";
    PostStatusEnum[/** Objects with the request-completed status */ "REQUEST_COMPLETED"] = "REQUEST_COMPLETED";
    PostStatusEnum[/** Objects with the request-confirmed status */ "REQUEST_CONFIRMED"] = "REQUEST_CONFIRMED";
    PostStatusEnum[/** Objects with the request-failed status */ "REQUEST_FAILED"] = "REQUEST_FAILED";
    PostStatusEnum[/** Objects with the request-pending status */ "REQUEST_PENDING"] = "REQUEST_PENDING";
    PostStatusEnum[/** Objects with the trash status */ "TRASH"] = "TRASH";
})(PostStatusEnum || (PostStatusEnum = {}));
var RelationEnum;
(function(RelationEnum) {
    RelationEnum[/** The logical AND condition returns true if both operands are true, otherwise, it returns false. */ "AND"] = "AND";
    RelationEnum[/** The logical OR condition returns false if both operands are false, otherwise, it returns true. */ "OR"] = "OR";
})(RelationEnum || (RelationEnum = {}));
var TagIdType;
(function(TagIdType) {
    TagIdType[/** The Database ID for the node */ "DATABASE_ID"] = "DATABASE_ID";
    TagIdType[/** The hashed Global ID */ "ID"] = "ID";
    TagIdType[/** The name of the node */ "NAME"] = "NAME";
    TagIdType[/** Url friendly name of the node */ "SLUG"] = "SLUG";
    TagIdType[/** The URI for the node */ "URI"] = "URI";
})(TagIdType || (TagIdType = {}));
var TaxonomyEnum;
(function(TaxonomyEnum) {
    TaxonomyEnum[/** Taxonomy enum category */ "CATEGORY"] = "CATEGORY";
    TaxonomyEnum[/** Taxonomy enum post_format */ "POSTFORMAT"] = "POSTFORMAT";
    TaxonomyEnum[/** Taxonomy enum post_tag */ "TAG"] = "TAG";
})(TaxonomyEnum || (TaxonomyEnum = {}));
var TaxonomyIdTypeEnum;
(function(TaxonomyIdTypeEnum) {
    TaxonomyIdTypeEnum[/** The globally unique ID */ "ID"] = "ID";
    TaxonomyIdTypeEnum[/** The name of the taxonomy */ "NAME"] = "NAME";
})(TaxonomyIdTypeEnum || (TaxonomyIdTypeEnum = {}));
var TermNodeIdTypeEnum;
(function(TermNodeIdTypeEnum) {
    TermNodeIdTypeEnum[/** The Database ID for the node */ "DATABASE_ID"] = "DATABASE_ID";
    TermNodeIdTypeEnum[/** The hashed Global ID */ "ID"] = "ID";
    TermNodeIdTypeEnum[/** The name of the node */ "NAME"] = "NAME";
    TermNodeIdTypeEnum[/** Url friendly name of the node */ "SLUG"] = "SLUG";
    TermNodeIdTypeEnum[/** The URI for the node */ "URI"] = "URI";
})(TermNodeIdTypeEnum || (TermNodeIdTypeEnum = {}));
var TermObjectsConnectionOrderbyEnum;
(function(TermObjectsConnectionOrderbyEnum) {
    TermObjectsConnectionOrderbyEnum[/** Order the connection by item count. */ "COUNT"] = "COUNT";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by description. */ "DESCRIPTION"] = "DESCRIPTION";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by name. */ "NAME"] = "NAME";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by slug. */ "SLUG"] = "SLUG";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by term group. */ "TERM_GROUP"] = "TERM_GROUP";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by term id. */ "TERM_ID"] = "TERM_ID";
    TermObjectsConnectionOrderbyEnum[/** Order the connection by term order. */ "TERM_ORDER"] = "TERM_ORDER";
})(TermObjectsConnectionOrderbyEnum || (TermObjectsConnectionOrderbyEnum = {}));
var UserNodeIdTypeEnum;
(function(UserNodeIdTypeEnum) {
    UserNodeIdTypeEnum[/** The Database ID for the node */ "DATABASE_ID"] = "DATABASE_ID";
    UserNodeIdTypeEnum[/** The Email of the User */ "EMAIL"] = "EMAIL";
    UserNodeIdTypeEnum[/** The hashed Global ID */ "ID"] = "ID";
    UserNodeIdTypeEnum[/** The slug of the User */ "SLUG"] = "SLUG";
    UserNodeIdTypeEnum[/** The URI for the node */ "URI"] = "URI";
    UserNodeIdTypeEnum[/** The username the User uses to login with */ "USERNAME"] = "USERNAME";
})(UserNodeIdTypeEnum || (UserNodeIdTypeEnum = {}));
var UserRoleEnum;
(function(UserRoleEnum) {
    UserRoleEnum[/** User role with specific capabilities */ "ADMINISTRATOR"] = "ADMINISTRATOR";
    UserRoleEnum[/** User role with specific capabilities */ "AUTHOR"] = "AUTHOR";
    UserRoleEnum[/** User role with specific capabilities */ "CONTRIBUTOR"] = "CONTRIBUTOR";
    UserRoleEnum[/** User role with specific capabilities */ "EDITOR"] = "EDITOR";
    UserRoleEnum[/** User role with specific capabilities */ "SUBSCRIBER"] = "SUBSCRIBER";
})(UserRoleEnum || (UserRoleEnum = {}));
var UsersConnectionOrderbyEnum;
(function(UsersConnectionOrderbyEnum) {
    UsersConnectionOrderbyEnum[/** Order by display name */ "DISPLAY_NAME"] = "DISPLAY_NAME";
    UsersConnectionOrderbyEnum[/** Order by email address */ "EMAIL"] = "EMAIL";
    UsersConnectionOrderbyEnum[/** Order by login */ "LOGIN"] = "LOGIN";
    UsersConnectionOrderbyEnum[/** Preserve the login order given in the LOGIN_IN array */ "LOGIN_IN"] = "LOGIN_IN";
    UsersConnectionOrderbyEnum[/** Order by nice name */ "NICE_NAME"] = "NICE_NAME";
    UsersConnectionOrderbyEnum[/** Preserve the nice name order given in the NICE_NAME_IN array */ "NICE_NAME_IN"] = "NICE_NAME_IN";
    UsersConnectionOrderbyEnum[/** Order by registration date */ "REGISTERED"] = "REGISTERED";
    UsersConnectionOrderbyEnum[/** Order by URL */ "URL"] = "URL";
})(UsersConnectionOrderbyEnum || (UsersConnectionOrderbyEnum = {}));
var UsersConnectionSearchColumnEnum;
(function(UsersConnectionSearchColumnEnum) {
    UsersConnectionSearchColumnEnum[/** The user's email address. */ "EMAIL"] = "EMAIL";
    UsersConnectionSearchColumnEnum[/** The globally unique ID. */ "ID"] = "ID";
    UsersConnectionSearchColumnEnum[/** The username the User uses to login with. */ "LOGIN"] = "LOGIN";
    UsersConnectionSearchColumnEnum[/** A URL-friendly name for the user. The default is the user's username. */ "NICENAME"] = "NICENAME";
    UsersConnectionSearchColumnEnum[/** The URL of the user\s website. */ "URL"] = "URL";
})(UsersConnectionSearchColumnEnum || (UsersConnectionSearchColumnEnum = {}));
const scalarsEnumsHash = {
    AvatarRatingEnum: true,
    Boolean: true,
    CategoryIdType: true,
    CommentsConnectionOrderbyEnum: true,
    ContentNodeIdTypeEnum: true,
    ContentTypeEnum: true,
    ContentTypeIdTypeEnum: true,
    ContentTypesOfCategoryEnum: true,
    ContentTypesOfPostFormatEnum: true,
    ContentTypesOfTagEnum: true,
    Float: true,
    ID: true,
    Int: true,
    MediaItemIdType: true,
    MediaItemSizeEnum: true,
    MediaItemStatusEnum: true,
    MenuItemNodeIdTypeEnum: true,
    MenuLocationEnum: true,
    MenuNodeIdTypeEnum: true,
    MimeTypeEnum: true,
    OrderEnum: true,
    PageIdType: true,
    PostFormatIdType: true,
    PostIdType: true,
    PostObjectFieldFormatEnum: true,
    PostObjectsConnectionDateColumnEnum: true,
    PostObjectsConnectionOrderbyEnum: true,
    PostStatusEnum: true,
    RelationEnum: true,
    String: true,
    TagIdType: true,
    TaxonomyEnum: true,
    TaxonomyIdTypeEnum: true,
    TermNodeIdTypeEnum: true,
    TermObjectsConnectionOrderbyEnum: true,
    UserNodeIdTypeEnum: true,
    UserRoleEnum: true,
    UsersConnectionOrderbyEnum: true,
    UsersConnectionSearchColumnEnum: true
};
const generatedSchema = {
    Avatar: {
        __typename: {
            __type: "String!"
        },
        default: {
            __type: "String"
        },
        extraAttr: {
            __type: "String"
        },
        forceDefault: {
            __type: "Boolean"
        },
        foundAvatar: {
            __type: "Boolean"
        },
        height: {
            __type: "Int"
        },
        isRestricted: {
            __type: "Boolean"
        },
        rating: {
            __type: "String"
        },
        scheme: {
            __type: "String"
        },
        size: {
            __type: "Int"
        },
        url: {
            __type: "String"
        },
        width: {
            __type: "Int"
        }
    },
    Category: {
        __typename: {
            __type: "String!"
        },
        ancestors: {
            __type: "CategoryToAncestorsCategoryConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        categoryId: {
            __type: "Int"
        },
        children: {
            __type: "CategoryToCategoryConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "CategoryToCategoryConnectionWhereArgs"
            }
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentNodes: {
            __type: "CategoryToContentNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "CategoryToContentNodeConnectionWhereArgs"
            }
        },
        count: {
            __type: "Int"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "TermNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "TermNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        link: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        parent: {
            __type: "CategoryToParentCategoryConnectionEdge"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        posts: {
            __type: "CategoryToPostConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "CategoryToPostConnectionWhereArgs"
            }
        },
        slug: {
            __type: "String"
        },
        taxonomy: {
            __type: "CategoryToTaxonomyConnectionEdge"
        },
        taxonomyName: {
            __type: "String"
        },
        templates: {
            __type: "[String]"
        },
        termGroupId: {
            __type: "Int"
        },
        termTaxonomyId: {
            __type: "Int"
        },
        uri: {
            __type: "String"
        }
    },
    CategoryToAncestorsCategoryConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[CategoryToAncestorsCategoryConnectionEdge]"
        },
        nodes: {
            __type: "[Category]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    CategoryToAncestorsCategoryConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Category"
        }
    },
    CategoryToCategoryConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[CategoryToCategoryConnectionEdge]"
        },
        nodes: {
            __type: "[Category]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    CategoryToCategoryConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Category"
        }
    },
    CategoryToCategoryConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    CategoryToContentNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[CategoryToContentNodeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    CategoryToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    CategoryToContentNodeConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypesOfCategoryEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    CategoryToParentCategoryConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Category"
        }
    },
    CategoryToPostConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[CategoryToPostConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    CategoryToPostConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    CategoryToPostConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    CategoryToTaxonomyConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Taxonomy"
        }
    },
    Comment: {
        __typename: {
            __type: "String!"
        },
        agent: {
            __type: "String"
        },
        approved: {
            __type: "Boolean"
        },
        author: {
            __type: "CommentToCommenterConnectionEdge"
        },
        authorIp: {
            __type: "String"
        },
        commentId: {
            __type: "Int"
        },
        commentedOn: {
            __type: "CommentToContentNodeConnectionEdge"
        },
        content: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        karma: {
            __type: "Int"
        },
        parent: {
            __type: "CommentToParentCommentConnectionEdge",
            __args: {
                where: "CommentToParentCommentConnectionWhereArgs"
            }
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        replies: {
            __type: "CommentToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "CommentToCommentConnectionWhereArgs"
            }
        },
        type: {
            __type: "String"
        }
    },
    CommentAuthor: {
        __typename: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        email: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        name: {
            __type: "String"
        },
        url: {
            __type: "String"
        }
    },
    CommentToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[CommentToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    CommentToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    CommentToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    CommentToCommenterConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Commenter"
        }
    },
    CommentToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "ContentNode"
        }
    },
    CommentToParentCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Comment"
        }
    },
    CommentToParentCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    Commenter: {
        __typename: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        email: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        name: {
            __type: "String"
        },
        url: {
            __type: "String"
        },
        $on: {
            __type: "$Commenter!"
        }
    },
    ConditionalTags: {
        __typename: {
            __type: "String!"
        },
        isArchive: {
            __type: "Boolean"
        },
        isAttachment: {
            __type: "Boolean"
        },
        isAuthor: {
            __type: "Boolean"
        },
        isCategory: {
            __type: "Boolean"
        },
        isDate: {
            __type: "Boolean"
        },
        isDay: {
            __type: "Boolean"
        },
        isFrontPage: {
            __type: "Boolean"
        },
        isHome: {
            __type: "Boolean"
        },
        isMonth: {
            __type: "Boolean"
        },
        isMultiAuthor: {
            __type: "Boolean"
        },
        isPage: {
            __type: "Boolean"
        },
        isPageTemplate: {
            __type: "Boolean"
        },
        isPostTypeArchive: {
            __type: "Boolean"
        },
        isPreview: {
            __type: "Boolean"
        },
        isPrivacyPolicy: {
            __type: "Boolean"
        },
        isSearch: {
            __type: "Boolean"
        },
        isSingle: {
            __type: "Boolean"
        },
        isSingular: {
            __type: "Boolean"
        },
        isSticky: {
            __type: "Boolean"
        },
        isTag: {
            __type: "Boolean"
        },
        isTax: {
            __type: "Boolean"
        },
        isYear: {
            __type: "Boolean"
        }
    },
    ContentNode: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentType: {
            __type: "ContentNodeToContentTypeConnectionEdge"
        },
        contentTypeName: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        desiredSlug: {
            __type: "String"
        },
        editingLockedBy: {
            __type: "ContentNodeToEditLockConnectionEdge"
        },
        enclosure: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "ContentNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "ContentNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        guid: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isPreview: {
            __type: "Boolean"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastEditedBy: {
            __type: "ContentNodeToEditLastConnectionEdge"
        },
        link: {
            __type: "String"
        },
        modified: {
            __type: "String"
        },
        modifiedGmt: {
            __type: "String"
        },
        previewRevisionDatabaseId: {
            __type: "Int"
        },
        previewRevisionId: {
            __type: "ID"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        template: {
            __type: "ContentTemplate"
        },
        templates: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        },
        $on: {
            __type: "$ContentNode!"
        }
    },
    ContentNodeToContentTypeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "ContentType"
        }
    },
    ContentNodeToEditLastConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "User"
        }
    },
    ContentNodeToEditLockConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        lockTimestamp: {
            __type: "String"
        },
        node: {
            __type: "User"
        }
    },
    ContentNodeToEnqueuedScriptConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[ContentNodeToEnqueuedScriptConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedScript]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    ContentNodeToEnqueuedScriptConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedScript"
        }
    },
    ContentNodeToEnqueuedStylesheetConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[ContentNodeToEnqueuedStylesheetConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedStylesheet]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    ContentNodeToEnqueuedStylesheetConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedStylesheet"
        }
    },
    ContentRevisionUnion: {
        __typename: {
            __type: "String!"
        },
        $on: {
            __type: "$ContentRevisionUnion!"
        }
    },
    ContentTemplate: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        },
        $on: {
            __type: "$ContentTemplate!"
        }
    },
    ContentType: {
        __typename: {
            __type: "String!"
        },
        canExport: {
            __type: "Boolean"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        connectedTaxonomies: {
            __type: "ContentTypeToTaxonomyConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        contentNodes: {
            __type: "ContentTypeToContentNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "ContentTypeToContentNodeConnectionWhereArgs"
            }
        },
        deleteWithUser: {
            __type: "Boolean"
        },
        description: {
            __type: "String"
        },
        excludeFromSearch: {
            __type: "Boolean"
        },
        graphqlPluralName: {
            __type: "String"
        },
        graphqlSingleName: {
            __type: "String"
        },
        hasArchive: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isFrontPage: {
            __type: "Boolean!"
        },
        isPostsPage: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        label: {
            __type: "String"
        },
        labels: {
            __type: "PostTypeLabelDetails"
        },
        menuIcon: {
            __type: "String"
        },
        menuPosition: {
            __type: "Int"
        },
        name: {
            __type: "String"
        },
        public: {
            __type: "Boolean"
        },
        publiclyQueryable: {
            __type: "Boolean"
        },
        restBase: {
            __type: "String"
        },
        restControllerClass: {
            __type: "String"
        },
        showInAdminBar: {
            __type: "Boolean"
        },
        showInGraphql: {
            __type: "Boolean"
        },
        showInMenu: {
            __type: "Boolean"
        },
        showInNavMenus: {
            __type: "Boolean"
        },
        showInRest: {
            __type: "Boolean"
        },
        showUi: {
            __type: "Boolean"
        },
        templates: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        }
    },
    ContentTypeToContentNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[ContentTypeToContentNodeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    ContentTypeToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    ContentTypeToContentNodeConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    ContentTypeToTaxonomyConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[ContentTypeToTaxonomyConnectionEdge]"
        },
        nodes: {
            __type: "[Taxonomy]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    ContentTypeToTaxonomyConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Taxonomy"
        }
    },
    CreateCategoryInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        name: {
            __type: "String!"
        },
        parentId: {
            __type: "ID"
        },
        slug: {
            __type: "String"
        }
    },
    CreateCategoryPayload: {
        __typename: {
            __type: "String!"
        },
        category: {
            __type: "Category"
        },
        clientMutationId: {
            __type: "String"
        }
    },
    CreateCommentInput: {
        approved: {
            __type: "String"
        },
        author: {
            __type: "String"
        },
        authorEmail: {
            __type: "String"
        },
        authorUrl: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        commentOn: {
            __type: "Int"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        parent: {
            __type: "ID"
        },
        type: {
            __type: "String"
        }
    },
    CreateCommentPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        comment: {
            __type: "Comment"
        },
        success: {
            __type: "Boolean"
        }
    },
    CreateMediaItemInput: {
        altText: {
            __type: "String"
        },
        authorId: {
            __type: "ID"
        },
        caption: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        filePath: {
            __type: "String"
        },
        fileType: {
            __type: "MimeTypeEnum"
        },
        parentId: {
            __type: "ID"
        },
        pingStatus: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "MediaItemStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    CreateMediaItemPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        mediaItem: {
            __type: "MediaItem"
        }
    },
    CreatePageInput: {
        authorId: {
            __type: "ID"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        menuOrder: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        password: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    CreatePagePayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        page: {
            __type: "Page"
        }
    },
    CreatePostFormatInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        name: {
            __type: "String!"
        },
        slug: {
            __type: "String"
        }
    },
    CreatePostFormatPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        postFormat: {
            __type: "PostFormat"
        }
    },
    CreatePostInput: {
        authorId: {
            __type: "ID"
        },
        categories: {
            __type: "PostCategoriesInput"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        excerpt: {
            __type: "String"
        },
        menuOrder: {
            __type: "Int"
        },
        password: {
            __type: "String"
        },
        pingStatus: {
            __type: "String"
        },
        pinged: {
            __type: "[String]"
        },
        postFormats: {
            __type: "PostPostFormatsInput"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tags: {
            __type: "PostTagsInput"
        },
        title: {
            __type: "String"
        },
        toPing: {
            __type: "[String]"
        }
    },
    CreatePostPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        post: {
            __type: "Post"
        }
    },
    CreateTagInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        name: {
            __type: "String!"
        },
        slug: {
            __type: "String"
        }
    },
    CreateTagPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        tag: {
            __type: "Tag"
        }
    },
    CreateUserInput: {
        aim: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        displayName: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        firstName: {
            __type: "String"
        },
        jabber: {
            __type: "String"
        },
        lastName: {
            __type: "String"
        },
        locale: {
            __type: "String"
        },
        nicename: {
            __type: "String"
        },
        nickname: {
            __type: "String"
        },
        password: {
            __type: "String"
        },
        registered: {
            __type: "String"
        },
        richEditing: {
            __type: "String"
        },
        roles: {
            __type: "[String]"
        },
        username: {
            __type: "String!"
        },
        websiteUrl: {
            __type: "String"
        },
        yim: {
            __type: "String"
        }
    },
    CreateUserPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        user: {
            __type: "User"
        }
    },
    DatabaseIdentifier: {
        __typename: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        $on: {
            __type: "$DatabaseIdentifier!"
        }
    },
    DateInput: {
        day: {
            __type: "Int"
        },
        month: {
            __type: "Int"
        },
        year: {
            __type: "Int"
        }
    },
    DateQueryInput: {
        after: {
            __type: "DateInput"
        },
        before: {
            __type: "DateInput"
        },
        column: {
            __type: "PostObjectsConnectionDateColumnEnum"
        },
        compare: {
            __type: "String"
        },
        day: {
            __type: "Int"
        },
        hour: {
            __type: "Int"
        },
        inclusive: {
            __type: "Boolean"
        },
        minute: {
            __type: "Int"
        },
        month: {
            __type: "Int"
        },
        relation: {
            __type: "RelationEnum"
        },
        second: {
            __type: "Int"
        },
        week: {
            __type: "Int"
        },
        year: {
            __type: "Int"
        }
    },
    DefaultTemplate: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        }
    },
    DeleteCategoryInput: {
        clientMutationId: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        }
    },
    DeleteCategoryPayload: {
        __typename: {
            __type: "String!"
        },
        category: {
            __type: "Category"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        }
    },
    DeleteCommentInput: {
        clientMutationId: {
            __type: "String"
        },
        forceDelete: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        }
    },
    DeleteCommentPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        comment: {
            __type: "Comment"
        },
        deletedId: {
            __type: "ID"
        }
    },
    DeleteMediaItemInput: {
        clientMutationId: {
            __type: "String"
        },
        forceDelete: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        }
    },
    DeleteMediaItemPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        mediaItem: {
            __type: "MediaItem"
        }
    },
    DeletePageInput: {
        clientMutationId: {
            __type: "String"
        },
        forceDelete: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        }
    },
    DeletePagePayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        page: {
            __type: "Page"
        }
    },
    DeletePostFormatInput: {
        clientMutationId: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        }
    },
    DeletePostFormatPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        postFormat: {
            __type: "PostFormat"
        }
    },
    DeletePostInput: {
        clientMutationId: {
            __type: "String"
        },
        forceDelete: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        }
    },
    DeletePostPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        post: {
            __type: "Post"
        }
    },
    DeleteTagInput: {
        clientMutationId: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        }
    },
    DeleteTagPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        tag: {
            __type: "Tag"
        }
    },
    DeleteUserInput: {
        clientMutationId: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        reassignId: {
            __type: "ID"
        }
    },
    DeleteUserPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        deletedId: {
            __type: "ID"
        },
        user: {
            __type: "User"
        }
    },
    DiscussionSettings: {
        __typename: {
            __type: "String!"
        },
        defaultCommentStatus: {
            __type: "String"
        },
        defaultPingStatus: {
            __type: "String"
        }
    },
    EnqueuedAsset: {
        __typename: {
            __type: "String!"
        },
        args: {
            __type: "Boolean"
        },
        dependencies: {
            __type: "[EnqueuedScript]"
        },
        extra: {
            __type: "String"
        },
        handle: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        src: {
            __type: "String"
        },
        version: {
            __type: "String"
        },
        $on: {
            __type: "$EnqueuedAsset!"
        }
    },
    EnqueuedScript: {
        __typename: {
            __type: "String!"
        },
        args: {
            __type: "Boolean"
        },
        dependencies: {
            __type: "[EnqueuedScript]"
        },
        extra: {
            __type: "String"
        },
        handle: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        src: {
            __type: "String"
        },
        version: {
            __type: "String"
        }
    },
    EnqueuedStylesheet: {
        __typename: {
            __type: "String!"
        },
        args: {
            __type: "Boolean"
        },
        dependencies: {
            __type: "[EnqueuedScript]"
        },
        extra: {
            __type: "String"
        },
        handle: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        src: {
            __type: "String"
        },
        version: {
            __type: "String"
        }
    },
    GeneralSettings: {
        __typename: {
            __type: "String!"
        },
        dateFormat: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        language: {
            __type: "String"
        },
        startOfWeek: {
            __type: "Int"
        },
        timeFormat: {
            __type: "String"
        },
        timezone: {
            __type: "String"
        },
        title: {
            __type: "String"
        },
        url: {
            __type: "String"
        }
    },
    GenerateAuthorizationCodeInput: {
        clientMutationId: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        password: {
            __type: "String"
        },
        username: {
            __type: "String"
        }
    },
    GenerateAuthorizationCodePayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        code: {
            __type: "String"
        },
        error: {
            __type: "String"
        }
    },
    HierarchicalContentNode: {
        __typename: {
            __type: "String!"
        },
        ancestors: {
            __type: "HierarchicalContentNodeToContentNodeAncestorsConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"
            }
        },
        children: {
            __type: "HierarchicalContentNodeToContentNodeChildrenConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"
            }
        },
        parent: {
            __type: "HierarchicalContentNodeToParentContentNodeConnectionEdge"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        $on: {
            __type: "$HierarchicalContentNode!"
        }
    },
    HierarchicalContentNodeToContentNodeAncestorsConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[HierarchicalContentNodeToContentNodeAncestorsConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    HierarchicalContentNodeToContentNodeAncestorsConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    HierarchicalContentNodeToContentNodeChildrenConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[HierarchicalContentNodeToContentNodeChildrenConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    HierarchicalContentNodeToContentNodeChildrenConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    HierarchicalContentNodeToParentContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "ContentNode"
        }
    },
    HierarchicalTermNode: {
        __typename: {
            __type: "String!"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        $on: {
            __type: "$HierarchicalTermNode!"
        }
    },
    MediaDetails: {
        __typename: {
            __type: "String!"
        },
        file: {
            __type: "String"
        },
        height: {
            __type: "Int"
        },
        meta: {
            __type: "MediaItemMeta"
        },
        sizes: {
            __type: "[MediaSize]"
        },
        width: {
            __type: "Int"
        }
    },
    MediaItem: {
        __typename: {
            __type: "String!"
        },
        altText: {
            __type: "String"
        },
        ancestors: {
            __type: "HierarchicalContentNodeToContentNodeAncestorsConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"
            }
        },
        author: {
            __type: "NodeWithAuthorToUserConnectionEdge"
        },
        authorDatabaseId: {
            __type: "Int"
        },
        authorId: {
            __type: "ID"
        },
        caption: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        children: {
            __type: "HierarchicalContentNodeToContentNodeChildrenConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"
            }
        },
        commentCount: {
            __type: "Int"
        },
        commentStatus: {
            __type: "String"
        },
        comments: {
            __type: "MediaItemToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "MediaItemToCommentConnectionWhereArgs"
            }
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentType: {
            __type: "ContentNodeToContentTypeConnectionEdge"
        },
        contentTypeName: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        description: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        desiredSlug: {
            __type: "String"
        },
        editingLockedBy: {
            __type: "ContentNodeToEditLockConnectionEdge"
        },
        enclosure: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "ContentNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "ContentNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        fileSize: {
            __type: "Int",
            __args: {
                size: "MediaItemSizeEnum"
            }
        },
        guid: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isPreview: {
            __type: "Boolean"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastEditedBy: {
            __type: "ContentNodeToEditLastConnectionEdge"
        },
        link: {
            __type: "String"
        },
        mediaDetails: {
            __type: "MediaDetails"
        },
        mediaItemId: {
            __type: "Int!"
        },
        mediaItemUrl: {
            __type: "String"
        },
        mediaType: {
            __type: "String"
        },
        mimeType: {
            __type: "String"
        },
        modified: {
            __type: "String"
        },
        modifiedGmt: {
            __type: "String"
        },
        parent: {
            __type: "HierarchicalContentNodeToParentContentNodeConnectionEdge"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        previewRevisionDatabaseId: {
            __type: "Int"
        },
        previewRevisionId: {
            __type: "ID"
        },
        sizes: {
            __type: "String",
            __args: {
                size: "MediaItemSizeEnum"
            }
        },
        slug: {
            __type: "String"
        },
        sourceUrl: {
            __type: "String",
            __args: {
                size: "MediaItemSizeEnum"
            }
        },
        srcSet: {
            __type: "String",
            __args: {
                size: "MediaItemSizeEnum"
            }
        },
        status: {
            __type: "String"
        },
        template: {
            __type: "ContentTemplate"
        },
        templates: {
            __type: "[String]"
        },
        title: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        uri: {
            __type: "String"
        }
    },
    MediaItemMeta: {
        __typename: {
            __type: "String!"
        },
        aperture: {
            __type: "Float"
        },
        camera: {
            __type: "String"
        },
        caption: {
            __type: "String"
        },
        copyright: {
            __type: "String"
        },
        createdTimestamp: {
            __type: "Int"
        },
        credit: {
            __type: "String"
        },
        focalLength: {
            __type: "Float"
        },
        iso: {
            __type: "Int"
        },
        keywords: {
            __type: "[String]"
        },
        orientation: {
            __type: "String"
        },
        shutterSpeed: {
            __type: "Float"
        },
        title: {
            __type: "String"
        }
    },
    MediaItemToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[MediaItemToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    MediaItemToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    MediaItemToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    MediaSize: {
        __typename: {
            __type: "String!"
        },
        file: {
            __type: "String"
        },
        fileSize: {
            __type: "Int"
        },
        height: {
            __type: "String"
        },
        mimeType: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        sourceUrl: {
            __type: "String"
        },
        width: {
            __type: "String"
        }
    },
    Menu: {
        __typename: {
            __type: "String!"
        },
        count: {
            __type: "Int"
        },
        databaseId: {
            __type: "Int!"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        locations: {
            __type: "[MenuLocationEnum]"
        },
        menuId: {
            __type: "Int"
        },
        menuItems: {
            __type: "MenuToMenuItemConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "MenuToMenuItemConnectionWhereArgs"
            }
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    MenuItem: {
        __typename: {
            __type: "String!"
        },
        childItems: {
            __type: "MenuItemToMenuItemConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "MenuItemToMenuItemConnectionWhereArgs"
            }
        },
        connectedNode: {
            __type: "MenuItemToMenuItemLinkableConnectionEdge"
        },
        connectedObject: {
            __type: "MenuItemObjectUnion"
        },
        cssClasses: {
            __type: "[String]"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        label: {
            __type: "String"
        },
        linkRelationship: {
            __type: "String"
        },
        locations: {
            __type: "[MenuLocationEnum]"
        },
        menu: {
            __type: "MenuItemToMenuConnectionEdge"
        },
        menuItemId: {
            __type: "Int"
        },
        order: {
            __type: "Int"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        path: {
            __type: "String"
        },
        target: {
            __type: "String"
        },
        title: {
            __type: "String"
        },
        url: {
            __type: "String"
        }
    },
    MenuItemLinkable: {
        __typename: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        id: {
            __type: "ID!"
        },
        uri: {
            __type: "String"
        },
        $on: {
            __type: "$MenuItemLinkable!"
        }
    },
    MenuItemObjectUnion: {
        __typename: {
            __type: "String!"
        },
        $on: {
            __type: "$MenuItemObjectUnion!"
        }
    },
    MenuItemToMenuConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Menu"
        }
    },
    MenuItemToMenuItemConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[MenuItemToMenuItemConnectionEdge]"
        },
        nodes: {
            __type: "[MenuItem]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    MenuItemToMenuItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "MenuItem"
        }
    },
    MenuItemToMenuItemConnectionWhereArgs: {
        id: {
            __type: "Int"
        },
        location: {
            __type: "MenuLocationEnum"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        }
    },
    MenuItemToMenuItemLinkableConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "MenuItemLinkable"
        }
    },
    MenuToMenuItemConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[MenuToMenuItemConnectionEdge]"
        },
        nodes: {
            __type: "[MenuItem]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    MenuToMenuItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "MenuItem"
        }
    },
    MenuToMenuItemConnectionWhereArgs: {
        id: {
            __type: "Int"
        },
        location: {
            __type: "MenuLocationEnum"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        }
    },
    Node: {
        __typename: {
            __type: "String!"
        },
        id: {
            __type: "ID!"
        },
        $on: {
            __type: "$Node!"
        }
    },
    NodeWithAuthor: {
        __typename: {
            __type: "String!"
        },
        author: {
            __type: "NodeWithAuthorToUserConnectionEdge"
        },
        authorDatabaseId: {
            __type: "Int"
        },
        authorId: {
            __type: "ID"
        },
        $on: {
            __type: "$NodeWithAuthor!"
        }
    },
    NodeWithAuthorToUserConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "User"
        }
    },
    NodeWithComments: {
        __typename: {
            __type: "String!"
        },
        commentCount: {
            __type: "Int"
        },
        commentStatus: {
            __type: "String"
        },
        $on: {
            __type: "$NodeWithComments!"
        }
    },
    NodeWithContentEditor: {
        __typename: {
            __type: "String!"
        },
        content: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        $on: {
            __type: "$NodeWithContentEditor!"
        }
    },
    NodeWithExcerpt: {
        __typename: {
            __type: "String!"
        },
        excerpt: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        $on: {
            __type: "$NodeWithExcerpt!"
        }
    },
    NodeWithFeaturedImage: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentType: {
            __type: "ContentNodeToContentTypeConnectionEdge"
        },
        contentTypeName: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        desiredSlug: {
            __type: "String"
        },
        editingLockedBy: {
            __type: "ContentNodeToEditLockConnectionEdge"
        },
        enclosure: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "ContentNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "ContentNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        featuredImage: {
            __type: "NodeWithFeaturedImageToMediaItemConnectionEdge"
        },
        featuredImageDatabaseId: {
            __type: "Int"
        },
        featuredImageId: {
            __type: "ID"
        },
        guid: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isPreview: {
            __type: "Boolean"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastEditedBy: {
            __type: "ContentNodeToEditLastConnectionEdge"
        },
        link: {
            __type: "String"
        },
        modified: {
            __type: "String"
        },
        modifiedGmt: {
            __type: "String"
        },
        previewRevisionDatabaseId: {
            __type: "Int"
        },
        previewRevisionId: {
            __type: "ID"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        template: {
            __type: "ContentTemplate"
        },
        templates: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        },
        $on: {
            __type: "$NodeWithFeaturedImage!"
        }
    },
    NodeWithFeaturedImageToMediaItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "MediaItem"
        }
    },
    NodeWithPageAttributes: {
        __typename: {
            __type: "String!"
        },
        menuOrder: {
            __type: "Int"
        },
        $on: {
            __type: "$NodeWithPageAttributes!"
        }
    },
    NodeWithRevisions: {
        __typename: {
            __type: "String!"
        },
        isRevision: {
            __type: "Boolean"
        },
        revisionOf: {
            __type: "NodeWithRevisionsToContentNodeConnectionEdge"
        },
        $on: {
            __type: "$NodeWithRevisions!"
        }
    },
    NodeWithRevisionsToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "ContentNode"
        }
    },
    NodeWithTemplate: {
        __typename: {
            __type: "String!"
        },
        template: {
            __type: "ContentTemplate"
        },
        $on: {
            __type: "$NodeWithTemplate!"
        }
    },
    NodeWithTitle: {
        __typename: {
            __type: "String!"
        },
        title: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        $on: {
            __type: "$NodeWithTitle!"
        }
    },
    NodeWithTrackbacks: {
        __typename: {
            __type: "String!"
        },
        pingStatus: {
            __type: "String"
        },
        pinged: {
            __type: "[String]"
        },
        toPing: {
            __type: "[String]"
        },
        $on: {
            __type: "$NodeWithTrackbacks!"
        }
    },
    Page: {
        __typename: {
            __type: "String!"
        },
        ancestors: {
            __type: "HierarchicalContentNodeToContentNodeAncestorsConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"
            }
        },
        author: {
            __type: "NodeWithAuthorToUserConnectionEdge"
        },
        authorDatabaseId: {
            __type: "Int"
        },
        authorId: {
            __type: "ID"
        },
        children: {
            __type: "HierarchicalContentNodeToContentNodeChildrenConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"
            }
        },
        commentCount: {
            __type: "Int"
        },
        commentStatus: {
            __type: "String"
        },
        comments: {
            __type: "PageToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PageToCommentConnectionWhereArgs"
            }
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        content: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        contentType: {
            __type: "ContentNodeToContentTypeConnectionEdge"
        },
        contentTypeName: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        desiredSlug: {
            __type: "String"
        },
        editingLockedBy: {
            __type: "ContentNodeToEditLockConnectionEdge"
        },
        enclosure: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "ContentNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "ContentNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        featuredImage: {
            __type: "NodeWithFeaturedImageToMediaItemConnectionEdge"
        },
        featuredImageDatabaseId: {
            __type: "Int"
        },
        featuredImageId: {
            __type: "ID"
        },
        guid: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isFrontPage: {
            __type: "Boolean!"
        },
        isPostsPage: {
            __type: "Boolean!"
        },
        isPreview: {
            __type: "Boolean"
        },
        isPrivacyPage: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isRevision: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastEditedBy: {
            __type: "ContentNodeToEditLastConnectionEdge"
        },
        link: {
            __type: "String"
        },
        menuOrder: {
            __type: "Int"
        },
        modified: {
            __type: "String"
        },
        modifiedGmt: {
            __type: "String"
        },
        pageId: {
            __type: "Int!"
        },
        parent: {
            __type: "HierarchicalContentNodeToParentContentNodeConnectionEdge"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        preview: {
            __type: "PageToPreviewConnectionEdge"
        },
        previewRevisionDatabaseId: {
            __type: "Int"
        },
        previewRevisionId: {
            __type: "ID"
        },
        revisionOf: {
            __type: "NodeWithRevisionsToContentNodeConnectionEdge"
        },
        revisions: {
            __type: "PageToRevisionConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PageToRevisionConnectionWhereArgs"
            }
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        template: {
            __type: "ContentTemplate"
        },
        templates: {
            __type: "[String]"
        },
        title: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        uri: {
            __type: "String"
        }
    },
    PageToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PageToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PageToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    PageToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    PageToPreviewConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Page"
        }
    },
    PageToRevisionConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PageToRevisionConnectionEdge]"
        },
        nodes: {
            __type: "[Page]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PageToRevisionConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Page"
        }
    },
    PageToRevisionConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    Plugin: {
        __typename: {
            __type: "String!"
        },
        author: {
            __type: "String"
        },
        authorUri: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        name: {
            __type: "String"
        },
        path: {
            __type: "String"
        },
        pluginUri: {
            __type: "String"
        },
        version: {
            __type: "String"
        }
    },
    Post: {
        __typename: {
            __type: "String!"
        },
        author: {
            __type: "NodeWithAuthorToUserConnectionEdge"
        },
        authorDatabaseId: {
            __type: "Int"
        },
        authorId: {
            __type: "ID"
        },
        categories: {
            __type: "PostToCategoryConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToCategoryConnectionWhereArgs"
            }
        },
        commentCount: {
            __type: "Int"
        },
        commentStatus: {
            __type: "String"
        },
        comments: {
            __type: "PostToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToCommentConnectionWhereArgs"
            }
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        content: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        contentType: {
            __type: "ContentNodeToContentTypeConnectionEdge"
        },
        contentTypeName: {
            __type: "String!"
        },
        databaseId: {
            __type: "Int!"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        desiredSlug: {
            __type: "String"
        },
        editingLockedBy: {
            __type: "ContentNodeToEditLockConnectionEdge"
        },
        enclosure: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "ContentNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "ContentNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        excerpt: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        featuredImage: {
            __type: "NodeWithFeaturedImageToMediaItemConnectionEdge"
        },
        featuredImageDatabaseId: {
            __type: "Int"
        },
        featuredImageId: {
            __type: "ID"
        },
        guid: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isPreview: {
            __type: "Boolean"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isRevision: {
            __type: "Boolean"
        },
        isSticky: {
            __type: "Boolean!"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastEditedBy: {
            __type: "ContentNodeToEditLastConnectionEdge"
        },
        link: {
            __type: "String"
        },
        modified: {
            __type: "String"
        },
        modifiedGmt: {
            __type: "String"
        },
        pingStatus: {
            __type: "String"
        },
        pinged: {
            __type: "[String]"
        },
        postFormats: {
            __type: "PostToPostFormatConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToPostFormatConnectionWhereArgs"
            }
        },
        postId: {
            __type: "Int!"
        },
        preview: {
            __type: "PostToPreviewConnectionEdge"
        },
        previewRevisionDatabaseId: {
            __type: "Int"
        },
        previewRevisionId: {
            __type: "ID"
        },
        revisionOf: {
            __type: "NodeWithRevisionsToContentNodeConnectionEdge"
        },
        revisions: {
            __type: "PostToRevisionConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToRevisionConnectionWhereArgs"
            }
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        tags: {
            __type: "PostToTagConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToTagConnectionWhereArgs"
            }
        },
        template: {
            __type: "ContentTemplate"
        },
        templates: {
            __type: "[String]"
        },
        terms: {
            __type: "PostToTermNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostToTermNodeConnectionWhereArgs"
            }
        },
        title: {
            __type: "String",
            __args: {
                format: "PostObjectFieldFormatEnum"
            }
        },
        toPing: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        }
    },
    PostCategoriesInput: {
        append: {
            __type: "Boolean"
        },
        nodes: {
            __type: "[PostCategoriesNodeInput]"
        }
    },
    PostCategoriesNodeInput: {
        description: {
            __type: "String"
        },
        id: {
            __type: "ID"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    PostFormat: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentNodes: {
            __type: "PostFormatToContentNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostFormatToContentNodeConnectionWhereArgs"
            }
        },
        count: {
            __type: "Int"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "TermNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "TermNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        link: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        postFormatId: {
            __type: "Int"
        },
        posts: {
            __type: "PostFormatToPostConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "PostFormatToPostConnectionWhereArgs"
            }
        },
        slug: {
            __type: "String"
        },
        taxonomy: {
            __type: "PostFormatToTaxonomyConnectionEdge"
        },
        taxonomyName: {
            __type: "String"
        },
        templates: {
            __type: "[String]"
        },
        termGroupId: {
            __type: "Int"
        },
        termTaxonomyId: {
            __type: "Int"
        },
        uri: {
            __type: "String"
        }
    },
    PostFormatToContentNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostFormatToContentNodeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostFormatToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    PostFormatToContentNodeConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypesOfPostFormatEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    PostFormatToPostConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostFormatToPostConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostFormatToPostConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    PostFormatToPostConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    PostFormatToTaxonomyConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Taxonomy"
        }
    },
    PostObjectsConnectionOrderbyInput: {
        field: {
            __type: "PostObjectsConnectionOrderbyEnum!"
        },
        order: {
            __type: "OrderEnum!"
        }
    },
    PostPostFormatsInput: {
        append: {
            __type: "Boolean"
        },
        nodes: {
            __type: "[PostPostFormatsNodeInput]"
        }
    },
    PostPostFormatsNodeInput: {
        description: {
            __type: "String"
        },
        id: {
            __type: "ID"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    PostTagsInput: {
        append: {
            __type: "Boolean"
        },
        nodes: {
            __type: "[PostTagsNodeInput]"
        }
    },
    PostTagsNodeInput: {
        description: {
            __type: "String"
        },
        id: {
            __type: "ID"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    PostToCategoryConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToCategoryConnectionEdge]"
        },
        nodes: {
            __type: "[Category]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToCategoryConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Category"
        }
    },
    PostToCategoryConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    PostToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    PostToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    PostToPostFormatConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToPostFormatConnectionEdge]"
        },
        nodes: {
            __type: "[PostFormat]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToPostFormatConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "PostFormat"
        }
    },
    PostToPostFormatConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    PostToPreviewConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Post"
        }
    },
    PostToRevisionConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToRevisionConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToRevisionConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    PostToRevisionConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    PostToTagConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToTagConnectionEdge]"
        },
        nodes: {
            __type: "[Tag]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToTagConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Tag"
        }
    },
    PostToTagConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    PostToTermNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[PostToTermNodeConnectionEdge]"
        },
        nodes: {
            __type: "[TermNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    PostToTermNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "TermNode"
        }
    },
    PostToTermNodeConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        taxonomies: {
            __type: "[TaxonomyEnum]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    PostTypeLabelDetails: {
        __typename: {
            __type: "String!"
        },
        addNew: {
            __type: "String"
        },
        addNewItem: {
            __type: "String"
        },
        allItems: {
            __type: "String"
        },
        archives: {
            __type: "String"
        },
        attributes: {
            __type: "String"
        },
        editItem: {
            __type: "String"
        },
        featuredImage: {
            __type: "String"
        },
        filterItemsList: {
            __type: "String"
        },
        insertIntoItem: {
            __type: "String"
        },
        itemsList: {
            __type: "String"
        },
        itemsListNavigation: {
            __type: "String"
        },
        menuName: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        newItem: {
            __type: "String"
        },
        notFound: {
            __type: "String"
        },
        notFoundInTrash: {
            __type: "String"
        },
        parentItemColon: {
            __type: "String"
        },
        removeFeaturedImage: {
            __type: "String"
        },
        searchItems: {
            __type: "String"
        },
        setFeaturedImage: {
            __type: "String"
        },
        singularName: {
            __type: "String"
        },
        uploadedToThisItem: {
            __type: "String"
        },
        useFeaturedImage: {
            __type: "String"
        },
        viewItem: {
            __type: "String"
        },
        viewItems: {
            __type: "String"
        }
    },
    ReadingSettings: {
        __typename: {
            __type: "String!"
        },
        postsPerPage: {
            __type: "Int"
        }
    },
    RegisterUserInput: {
        aim: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        displayName: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        firstName: {
            __type: "String"
        },
        jabber: {
            __type: "String"
        },
        lastName: {
            __type: "String"
        },
        locale: {
            __type: "String"
        },
        nicename: {
            __type: "String"
        },
        nickname: {
            __type: "String"
        },
        password: {
            __type: "String"
        },
        registered: {
            __type: "String"
        },
        richEditing: {
            __type: "String"
        },
        username: {
            __type: "String!"
        },
        websiteUrl: {
            __type: "String"
        },
        yim: {
            __type: "String"
        }
    },
    RegisterUserPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        user: {
            __type: "User"
        }
    },
    ResetUserPasswordInput: {
        clientMutationId: {
            __type: "String"
        },
        key: {
            __type: "String"
        },
        login: {
            __type: "String"
        },
        password: {
            __type: "String"
        }
    },
    ResetUserPasswordPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        user: {
            __type: "User"
        }
    },
    RestoreCommentInput: {
        clientMutationId: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        }
    },
    RestoreCommentPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        comment: {
            __type: "Comment"
        },
        restoredId: {
            __type: "ID"
        }
    },
    RootQueryToCategoryConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToCategoryConnectionEdge]"
        },
        nodes: {
            __type: "[Category]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToCategoryConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Category"
        }
    },
    RootQueryToCategoryConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    RootQueryToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    RootQueryToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    RootQueryToContentNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToContentNodeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    RootQueryToContentNodeConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    RootQueryToContentRevisionUnionConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToContentRevisionUnionConnectionEdge]"
        },
        nodes: {
            __type: "[ContentRevisionUnion]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToContentRevisionUnionConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentRevisionUnion"
        }
    },
    RootQueryToContentRevisionUnionConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    RootQueryToContentTypeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToContentTypeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentType]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToContentTypeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentType"
        }
    },
    RootQueryToEnqueuedScriptConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToEnqueuedScriptConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedScript]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToEnqueuedScriptConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedScript"
        }
    },
    RootQueryToEnqueuedStylesheetConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToEnqueuedStylesheetConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedStylesheet]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToEnqueuedStylesheetConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedStylesheet"
        }
    },
    RootQueryToMediaItemConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToMediaItemConnectionEdge]"
        },
        nodes: {
            __type: "[MediaItem]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToMediaItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "MediaItem"
        }
    },
    RootQueryToMediaItemConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    RootQueryToMenuConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToMenuConnectionEdge]"
        },
        nodes: {
            __type: "[Menu]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToMenuConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Menu"
        }
    },
    RootQueryToMenuConnectionWhereArgs: {
        id: {
            __type: "Int"
        },
        location: {
            __type: "MenuLocationEnum"
        },
        slug: {
            __type: "String"
        }
    },
    RootQueryToMenuItemConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToMenuItemConnectionEdge]"
        },
        nodes: {
            __type: "[MenuItem]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToMenuItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "MenuItem"
        }
    },
    RootQueryToMenuItemConnectionWhereArgs: {
        id: {
            __type: "Int"
        },
        location: {
            __type: "MenuLocationEnum"
        },
        parentDatabaseId: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        }
    },
    RootQueryToPageConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToPageConnectionEdge]"
        },
        nodes: {
            __type: "[Page]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToPageConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Page"
        }
    },
    RootQueryToPageConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    RootQueryToPluginConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToPluginConnectionEdge]"
        },
        nodes: {
            __type: "[Plugin]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToPluginConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Plugin"
        }
    },
    RootQueryToPostConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToPostConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToPostConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    RootQueryToPostConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    RootQueryToPostFormatConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToPostFormatConnectionEdge]"
        },
        nodes: {
            __type: "[PostFormat]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToPostFormatConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "PostFormat"
        }
    },
    RootQueryToPostFormatConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    RootQueryToTagConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToTagConnectionEdge]"
        },
        nodes: {
            __type: "[Tag]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToTagConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Tag"
        }
    },
    RootQueryToTagConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    RootQueryToTaxonomyConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToTaxonomyConnectionEdge]"
        },
        nodes: {
            __type: "[Taxonomy]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToTaxonomyConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Taxonomy"
        }
    },
    RootQueryToTermNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToTermNodeConnectionEdge]"
        },
        nodes: {
            __type: "[TermNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToTermNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "TermNode"
        }
    },
    RootQueryToTermNodeConnectionWhereArgs: {
        cacheDomain: {
            __type: "String"
        },
        childOf: {
            __type: "Int"
        },
        childless: {
            __type: "Boolean"
        },
        descriptionLike: {
            __type: "String"
        },
        exclude: {
            __type: "[ID]"
        },
        excludeTree: {
            __type: "[ID]"
        },
        hideEmpty: {
            __type: "Boolean"
        },
        hierarchical: {
            __type: "Boolean"
        },
        include: {
            __type: "[ID]"
        },
        name: {
            __type: "[String]"
        },
        nameLike: {
            __type: "String"
        },
        objectIds: {
            __type: "[ID]"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "TermObjectsConnectionOrderbyEnum"
        },
        padCounts: {
            __type: "Boolean"
        },
        parent: {
            __type: "Int"
        },
        search: {
            __type: "String"
        },
        slug: {
            __type: "[String]"
        },
        taxonomies: {
            __type: "[TaxonomyEnum]"
        },
        termTaxonomId: {
            __type: "[ID]"
        },
        updateTermMetaCache: {
            __type: "Boolean"
        }
    },
    RootQueryToThemeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToThemeConnectionEdge]"
        },
        nodes: {
            __type: "[Theme]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToThemeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Theme"
        }
    },
    RootQueryToUserConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToUserConnectionEdge]"
        },
        nodes: {
            __type: "[User]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToUserConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "User"
        }
    },
    RootQueryToUserConnectionWhereArgs: {
        exclude: {
            __type: "[Int]"
        },
        hasPublishedPosts: {
            __type: "[ContentTypeEnum]"
        },
        include: {
            __type: "[Int]"
        },
        login: {
            __type: "String"
        },
        loginIn: {
            __type: "[String]"
        },
        loginNotIn: {
            __type: "[String]"
        },
        nicename: {
            __type: "String"
        },
        nicenameIn: {
            __type: "[String]"
        },
        nicenameNotIn: {
            __type: "[String]"
        },
        orderby: {
            __type: "[UsersConnectionOrderbyInput]"
        },
        role: {
            __type: "UserRoleEnum"
        },
        roleIn: {
            __type: "[UserRoleEnum]"
        },
        roleNotIn: {
            __type: "[UserRoleEnum]"
        },
        search: {
            __type: "String"
        },
        searchColumns: {
            __type: "[UsersConnectionSearchColumnEnum]"
        }
    },
    RootQueryToUserRoleConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[RootQueryToUserRoleConnectionEdge]"
        },
        nodes: {
            __type: "[UserRole]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    RootQueryToUserRoleConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "UserRole"
        }
    },
    SendPasswordResetEmailInput: {
        clientMutationId: {
            __type: "String"
        },
        username: {
            __type: "String!"
        }
    },
    SendPasswordResetEmailPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        user: {
            __type: "User"
        }
    },
    Settings: {
        __typename: {
            __type: "String!"
        },
        discussionSettingsDefaultCommentStatus: {
            __type: "String"
        },
        discussionSettingsDefaultPingStatus: {
            __type: "String"
        },
        generalSettingsDateFormat: {
            __type: "String"
        },
        generalSettingsDescription: {
            __type: "String"
        },
        generalSettingsEmail: {
            __type: "String"
        },
        generalSettingsLanguage: {
            __type: "String"
        },
        generalSettingsStartOfWeek: {
            __type: "Int"
        },
        generalSettingsTimeFormat: {
            __type: "String"
        },
        generalSettingsTimezone: {
            __type: "String"
        },
        generalSettingsTitle: {
            __type: "String"
        },
        generalSettingsUrl: {
            __type: "String"
        },
        readingSettingsPostsPerPage: {
            __type: "Int"
        },
        writingSettingsDefaultCategory: {
            __type: "Int"
        },
        writingSettingsDefaultPostFormat: {
            __type: "String"
        },
        writingSettingsUseSmilies: {
            __type: "Boolean"
        }
    },
    Tag: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        contentNodes: {
            __type: "TagToContentNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "TagToContentNodeConnectionWhereArgs"
            }
        },
        count: {
            __type: "Int"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "TermNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "TermNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        link: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        posts: {
            __type: "TagToPostConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "TagToPostConnectionWhereArgs"
            }
        },
        slug: {
            __type: "String"
        },
        tagId: {
            __type: "Int"
        },
        taxonomy: {
            __type: "TagToTaxonomyConnectionEdge"
        },
        taxonomyName: {
            __type: "String"
        },
        templates: {
            __type: "[String]"
        },
        termGroupId: {
            __type: "Int"
        },
        termTaxonomyId: {
            __type: "Int"
        },
        uri: {
            __type: "String"
        }
    },
    TagToContentNodeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[TagToContentNodeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentNode]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    TagToContentNodeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentNode"
        }
    },
    TagToContentNodeConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypesOfTagEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    TagToPostConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[TagToPostConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    TagToPostConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    TagToPostConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    TagToTaxonomyConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        node: {
            __type: "Taxonomy"
        }
    },
    Taxonomy: {
        __typename: {
            __type: "String!"
        },
        connectedContentTypes: {
            __type: "TaxonomyToContentTypeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        description: {
            __type: "String"
        },
        graphqlPluralName: {
            __type: "String"
        },
        graphqlSingleName: {
            __type: "String"
        },
        hierarchical: {
            __type: "Boolean"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        label: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        public: {
            __type: "Boolean"
        },
        restBase: {
            __type: "String"
        },
        restControllerClass: {
            __type: "String"
        },
        showCloud: {
            __type: "Boolean"
        },
        showInAdminColumn: {
            __type: "Boolean"
        },
        showInGraphql: {
            __type: "Boolean"
        },
        showInMenu: {
            __type: "Boolean"
        },
        showInNavMenus: {
            __type: "Boolean"
        },
        showInQuickEdit: {
            __type: "Boolean"
        },
        showInRest: {
            __type: "Boolean"
        },
        showUi: {
            __type: "Boolean"
        }
    },
    TaxonomyToContentTypeConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[TaxonomyToContentTypeConnectionEdge]"
        },
        nodes: {
            __type: "[ContentType]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    TaxonomyToContentTypeConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentType"
        }
    },
    Template_Blank: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        }
    },
    Template_PageLargeHeader: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        }
    },
    Template_PageNoSeparators: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        }
    },
    Template_SinglePostNoSeparators: {
        __typename: {
            __type: "String!"
        },
        templateName: {
            __type: "String"
        }
    },
    TermNode: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        count: {
            __type: "Int"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "TermNodeToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "TermNodeToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        link: {
            __type: "String"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        taxonomyName: {
            __type: "String"
        },
        templates: {
            __type: "[String]"
        },
        termGroupId: {
            __type: "Int"
        },
        termTaxonomyId: {
            __type: "Int"
        },
        uri: {
            __type: "String"
        },
        $on: {
            __type: "$TermNode!"
        }
    },
    TermNodeToEnqueuedScriptConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[TermNodeToEnqueuedScriptConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedScript]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    TermNodeToEnqueuedScriptConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedScript"
        }
    },
    TermNodeToEnqueuedStylesheetConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[TermNodeToEnqueuedStylesheetConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedStylesheet]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    TermNodeToEnqueuedStylesheetConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedStylesheet"
        }
    },
    Theme: {
        __typename: {
            __type: "String!"
        },
        author: {
            __type: "String"
        },
        authorUri: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        name: {
            __type: "String"
        },
        screenshot: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        tags: {
            __type: "[String]"
        },
        themeUri: {
            __type: "String"
        },
        version: {
            __type: "String"
        }
    },
    UniformResourceIdentifiable: {
        __typename: {
            __type: "String!"
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        templates: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        },
        $on: {
            __type: "$UniformResourceIdentifiable!"
        }
    },
    UpdateCategoryInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        name: {
            __type: "String"
        },
        parentId: {
            __type: "ID"
        },
        slug: {
            __type: "String"
        }
    },
    UpdateCategoryPayload: {
        __typename: {
            __type: "String!"
        },
        category: {
            __type: "Category"
        },
        clientMutationId: {
            __type: "String"
        }
    },
    UpdateCommentInput: {
        approved: {
            __type: "String"
        },
        author: {
            __type: "String"
        },
        authorEmail: {
            __type: "String"
        },
        authorUrl: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        commentOn: {
            __type: "Int"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        parent: {
            __type: "ID"
        },
        type: {
            __type: "String"
        }
    },
    UpdateCommentPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        comment: {
            __type: "Comment"
        },
        success: {
            __type: "Boolean"
        }
    },
    UpdateMediaItemInput: {
        altText: {
            __type: "String"
        },
        authorId: {
            __type: "ID"
        },
        caption: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        dateGmt: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        filePath: {
            __type: "String"
        },
        fileType: {
            __type: "MimeTypeEnum"
        },
        id: {
            __type: "ID!"
        },
        parentId: {
            __type: "ID"
        },
        pingStatus: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "MediaItemStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    UpdateMediaItemPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        mediaItem: {
            __type: "MediaItem"
        }
    },
    UpdatePageInput: {
        authorId: {
            __type: "ID"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        menuOrder: {
            __type: "Int"
        },
        parentId: {
            __type: "ID"
        },
        password: {
            __type: "String"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    UpdatePagePayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        page: {
            __type: "Page"
        }
    },
    UpdatePostFormatInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    UpdatePostFormatPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        postFormat: {
            __type: "PostFormat"
        }
    },
    UpdatePostInput: {
        authorId: {
            __type: "ID"
        },
        categories: {
            __type: "PostCategoriesInput"
        },
        clientMutationId: {
            __type: "String"
        },
        commentStatus: {
            __type: "String"
        },
        content: {
            __type: "String"
        },
        date: {
            __type: "String"
        },
        excerpt: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        menuOrder: {
            __type: "Int"
        },
        password: {
            __type: "String"
        },
        pingStatus: {
            __type: "String"
        },
        pinged: {
            __type: "[String]"
        },
        postFormats: {
            __type: "PostPostFormatsInput"
        },
        slug: {
            __type: "String"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tags: {
            __type: "PostTagsInput"
        },
        title: {
            __type: "String"
        },
        toPing: {
            __type: "[String]"
        }
    },
    UpdatePostPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        post: {
            __type: "Post"
        }
    },
    UpdateSettingsInput: {
        clientMutationId: {
            __type: "String"
        },
        discussionSettingsDefaultCommentStatus: {
            __type: "String"
        },
        discussionSettingsDefaultPingStatus: {
            __type: "String"
        },
        generalSettingsDateFormat: {
            __type: "String"
        },
        generalSettingsDescription: {
            __type: "String"
        },
        generalSettingsEmail: {
            __type: "String"
        },
        generalSettingsLanguage: {
            __type: "String"
        },
        generalSettingsStartOfWeek: {
            __type: "Int"
        },
        generalSettingsTimeFormat: {
            __type: "String"
        },
        generalSettingsTimezone: {
            __type: "String"
        },
        generalSettingsTitle: {
            __type: "String"
        },
        generalSettingsUrl: {
            __type: "String"
        },
        readingSettingsPostsPerPage: {
            __type: "Int"
        },
        writingSettingsDefaultCategory: {
            __type: "Int"
        },
        writingSettingsDefaultPostFormat: {
            __type: "String"
        },
        writingSettingsUseSmilies: {
            __type: "Boolean"
        }
    },
    UpdateSettingsPayload: {
        __typename: {
            __type: "String!"
        },
        allSettings: {
            __type: "Settings"
        },
        clientMutationId: {
            __type: "String"
        },
        discussionSettings: {
            __type: "DiscussionSettings"
        },
        generalSettings: {
            __type: "GeneralSettings"
        },
        readingSettings: {
            __type: "ReadingSettings"
        },
        writingSettings: {
            __type: "WritingSettings"
        }
    },
    UpdateTagInput: {
        aliasOf: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        name: {
            __type: "String"
        },
        slug: {
            __type: "String"
        }
    },
    UpdateTagPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        tag: {
            __type: "Tag"
        }
    },
    UpdateUserInput: {
        aim: {
            __type: "String"
        },
        clientMutationId: {
            __type: "String"
        },
        description: {
            __type: "String"
        },
        displayName: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        firstName: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        jabber: {
            __type: "String"
        },
        lastName: {
            __type: "String"
        },
        locale: {
            __type: "String"
        },
        nicename: {
            __type: "String"
        },
        nickname: {
            __type: "String"
        },
        password: {
            __type: "String"
        },
        registered: {
            __type: "String"
        },
        richEditing: {
            __type: "String"
        },
        roles: {
            __type: "[String]"
        },
        websiteUrl: {
            __type: "String"
        },
        yim: {
            __type: "String"
        }
    },
    UpdateUserPayload: {
        __typename: {
            __type: "String!"
        },
        clientMutationId: {
            __type: "String"
        },
        user: {
            __type: "User"
        }
    },
    User: {
        __typename: {
            __type: "String!"
        },
        avatar: {
            __type: "Avatar",
            __args: {
                forceDefault: "Boolean",
                rating: "AvatarRatingEnum",
                size: "Int"
            }
        },
        capKey: {
            __type: "String"
        },
        capabilities: {
            __type: "[String]"
        },
        comments: {
            __type: "UserToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "UserToCommentConnectionWhereArgs"
            }
        },
        conditionalTags: {
            __type: "ConditionalTags"
        },
        databaseId: {
            __type: "Int!"
        },
        description: {
            __type: "String"
        },
        email: {
            __type: "String"
        },
        enqueuedScripts: {
            __type: "UserToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        enqueuedStylesheets: {
            __type: "UserToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        extraCapabilities: {
            __type: "[String]"
        },
        firstName: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isContentNode: {
            __type: "Boolean!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        isTermNode: {
            __type: "Boolean!"
        },
        lastName: {
            __type: "String"
        },
        locale: {
            __type: "String"
        },
        mediaItems: {
            __type: "UserToMediaItemConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "UserToMediaItemConnectionWhereArgs"
            }
        },
        name: {
            __type: "String"
        },
        nicename: {
            __type: "String"
        },
        nickname: {
            __type: "String"
        },
        pages: {
            __type: "UserToPageConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "UserToPageConnectionWhereArgs"
            }
        },
        posts: {
            __type: "UserToPostConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "UserToPostConnectionWhereArgs"
            }
        },
        registeredDate: {
            __type: "String"
        },
        revisions: {
            __type: "UserToContentRevisionUnionConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "UserToContentRevisionUnionConnectionWhereArgs"
            }
        },
        roles: {
            __type: "UserToUserRoleConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        slug: {
            __type: "String"
        },
        templates: {
            __type: "[String]"
        },
        uri: {
            __type: "String"
        },
        url: {
            __type: "String"
        },
        userId: {
            __type: "Int"
        },
        username: {
            __type: "String"
        }
    },
    UserRole: {
        __typename: {
            __type: "String!"
        },
        capabilities: {
            __type: "[String]"
        },
        displayName: {
            __type: "String"
        },
        id: {
            __type: "ID!"
        },
        isRestricted: {
            __type: "Boolean"
        },
        name: {
            __type: "String"
        }
    },
    UserToCommentConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToCommentConnectionEdge]"
        },
        nodes: {
            __type: "[Comment]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToCommentConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Comment"
        }
    },
    UserToCommentConnectionWhereArgs: {
        authorEmail: {
            __type: "String"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        authorUrl: {
            __type: "String"
        },
        commentIn: {
            __type: "[ID]"
        },
        commentNotIn: {
            __type: "[ID]"
        },
        commentType: {
            __type: "String"
        },
        commentTypeIn: {
            __type: "[String]"
        },
        commentTypeNotIn: {
            __type: "String"
        },
        contentAuthor: {
            __type: "[ID]"
        },
        contentAuthorIn: {
            __type: "[ID]"
        },
        contentAuthorNotIn: {
            __type: "[ID]"
        },
        contentId: {
            __type: "ID"
        },
        contentIdIn: {
            __type: "[ID]"
        },
        contentIdNotIn: {
            __type: "[ID]"
        },
        contentName: {
            __type: "String"
        },
        contentParent: {
            __type: "Int"
        },
        contentStatus: {
            __type: "[PostStatusEnum]"
        },
        contentType: {
            __type: "[ContentTypeEnum]"
        },
        includeUnapproved: {
            __type: "[ID]"
        },
        karma: {
            __type: "Int"
        },
        order: {
            __type: "OrderEnum"
        },
        orderby: {
            __type: "CommentsConnectionOrderbyEnum"
        },
        parent: {
            __type: "Int"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        search: {
            __type: "String"
        },
        status: {
            __type: "String"
        },
        userId: {
            __type: "ID"
        }
    },
    UserToContentRevisionUnionConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToContentRevisionUnionConnectionEdge]"
        },
        nodes: {
            __type: "[ContentRevisionUnion]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToContentRevisionUnionConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "ContentRevisionUnion"
        }
    },
    UserToContentRevisionUnionConnectionWhereArgs: {
        contentTypes: {
            __type: "[ContentTypeEnum]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    UserToEnqueuedScriptConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToEnqueuedScriptConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedScript]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToEnqueuedScriptConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedScript"
        }
    },
    UserToEnqueuedStylesheetConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToEnqueuedStylesheetConnectionEdge]"
        },
        nodes: {
            __type: "[EnqueuedStylesheet]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToEnqueuedStylesheetConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "EnqueuedStylesheet"
        }
    },
    UserToMediaItemConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToMediaItemConnectionEdge]"
        },
        nodes: {
            __type: "[MediaItem]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToMediaItemConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "MediaItem"
        }
    },
    UserToMediaItemConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    UserToPageConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToPageConnectionEdge]"
        },
        nodes: {
            __type: "[Page]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToPageConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Page"
        }
    },
    UserToPageConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        title: {
            __type: "String"
        }
    },
    UserToPostConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToPostConnectionEdge]"
        },
        nodes: {
            __type: "[Post]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToPostConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "Post"
        }
    },
    UserToPostConnectionWhereArgs: {
        author: {
            __type: "Int"
        },
        authorIn: {
            __type: "[ID]"
        },
        authorName: {
            __type: "String"
        },
        authorNotIn: {
            __type: "[ID]"
        },
        categoryId: {
            __type: "Int"
        },
        categoryIn: {
            __type: "[ID]"
        },
        categoryName: {
            __type: "String"
        },
        categoryNotIn: {
            __type: "[ID]"
        },
        dateQuery: {
            __type: "DateQueryInput"
        },
        hasPassword: {
            __type: "Boolean"
        },
        id: {
            __type: "Int"
        },
        in: {
            __type: "[ID]"
        },
        mimeType: {
            __type: "MimeTypeEnum"
        },
        name: {
            __type: "String"
        },
        nameIn: {
            __type: "[String]"
        },
        notIn: {
            __type: "[ID]"
        },
        orderby: {
            __type: "[PostObjectsConnectionOrderbyInput]"
        },
        parent: {
            __type: "ID"
        },
        parentIn: {
            __type: "[ID]"
        },
        parentNotIn: {
            __type: "[ID]"
        },
        password: {
            __type: "String"
        },
        search: {
            __type: "String"
        },
        stati: {
            __type: "[PostStatusEnum]"
        },
        status: {
            __type: "PostStatusEnum"
        },
        tag: {
            __type: "String"
        },
        tagId: {
            __type: "String"
        },
        tagIn: {
            __type: "[ID]"
        },
        tagNotIn: {
            __type: "[ID]"
        },
        tagSlugAnd: {
            __type: "[String]"
        },
        tagSlugIn: {
            __type: "[String]"
        },
        title: {
            __type: "String"
        }
    },
    UserToUserRoleConnection: {
        __typename: {
            __type: "String!"
        },
        edges: {
            __type: "[UserToUserRoleConnectionEdge]"
        },
        nodes: {
            __type: "[UserRole]"
        },
        pageInfo: {
            __type: "WPPageInfo"
        }
    },
    UserToUserRoleConnectionEdge: {
        __typename: {
            __type: "String!"
        },
        cursor: {
            __type: "String"
        },
        node: {
            __type: "UserRole"
        }
    },
    UsersConnectionOrderbyInput: {
        field: {
            __type: "UsersConnectionOrderbyEnum!"
        },
        order: {
            __type: "OrderEnum"
        }
    },
    WPPageInfo: {
        __typename: {
            __type: "String!"
        },
        endCursor: {
            __type: "String"
        },
        hasNextPage: {
            __type: "Boolean!"
        },
        hasPreviousPage: {
            __type: "Boolean!"
        },
        startCursor: {
            __type: "String"
        }
    },
    WritingSettings: {
        __typename: {
            __type: "String!"
        },
        defaultCategory: {
            __type: "Int"
        },
        defaultPostFormat: {
            __type: "String"
        },
        useSmilies: {
            __type: "Boolean"
        }
    },
    mutation: {
        __typename: {
            __type: "String!"
        },
        createCategory: {
            __type: "CreateCategoryPayload",
            __args: {
                input: "CreateCategoryInput!"
            }
        },
        createComment: {
            __type: "CreateCommentPayload",
            __args: {
                input: "CreateCommentInput!"
            }
        },
        createMediaItem: {
            __type: "CreateMediaItemPayload",
            __args: {
                input: "CreateMediaItemInput!"
            }
        },
        createPage: {
            __type: "CreatePagePayload",
            __args: {
                input: "CreatePageInput!"
            }
        },
        createPost: {
            __type: "CreatePostPayload",
            __args: {
                input: "CreatePostInput!"
            }
        },
        createPostFormat: {
            __type: "CreatePostFormatPayload",
            __args: {
                input: "CreatePostFormatInput!"
            }
        },
        createTag: {
            __type: "CreateTagPayload",
            __args: {
                input: "CreateTagInput!"
            }
        },
        createUser: {
            __type: "CreateUserPayload",
            __args: {
                input: "CreateUserInput!"
            }
        },
        deleteCategory: {
            __type: "DeleteCategoryPayload",
            __args: {
                input: "DeleteCategoryInput!"
            }
        },
        deleteComment: {
            __type: "DeleteCommentPayload",
            __args: {
                input: "DeleteCommentInput!"
            }
        },
        deleteMediaItem: {
            __type: "DeleteMediaItemPayload",
            __args: {
                input: "DeleteMediaItemInput!"
            }
        },
        deletePage: {
            __type: "DeletePagePayload",
            __args: {
                input: "DeletePageInput!"
            }
        },
        deletePost: {
            __type: "DeletePostPayload",
            __args: {
                input: "DeletePostInput!"
            }
        },
        deletePostFormat: {
            __type: "DeletePostFormatPayload",
            __args: {
                input: "DeletePostFormatInput!"
            }
        },
        deleteTag: {
            __type: "DeleteTagPayload",
            __args: {
                input: "DeleteTagInput!"
            }
        },
        deleteUser: {
            __type: "DeleteUserPayload",
            __args: {
                input: "DeleteUserInput!"
            }
        },
        generateAuthorizationCode: {
            __type: "GenerateAuthorizationCodePayload",
            __args: {
                input: "GenerateAuthorizationCodeInput!"
            }
        },
        increaseCount: {
            __type: "Int",
            __args: {
                count: "Int"
            }
        },
        registerUser: {
            __type: "RegisterUserPayload",
            __args: {
                input: "RegisterUserInput!"
            }
        },
        resetUserPassword: {
            __type: "ResetUserPasswordPayload",
            __args: {
                input: "ResetUserPasswordInput!"
            }
        },
        restoreComment: {
            __type: "RestoreCommentPayload",
            __args: {
                input: "RestoreCommentInput!"
            }
        },
        sendPasswordResetEmail: {
            __type: "SendPasswordResetEmailPayload",
            __args: {
                input: "SendPasswordResetEmailInput!"
            }
        },
        updateCategory: {
            __type: "UpdateCategoryPayload",
            __args: {
                input: "UpdateCategoryInput!"
            }
        },
        updateComment: {
            __type: "UpdateCommentPayload",
            __args: {
                input: "UpdateCommentInput!"
            }
        },
        updateMediaItem: {
            __type: "UpdateMediaItemPayload",
            __args: {
                input: "UpdateMediaItemInput!"
            }
        },
        updatePage: {
            __type: "UpdatePagePayload",
            __args: {
                input: "UpdatePageInput!"
            }
        },
        updatePost: {
            __type: "UpdatePostPayload",
            __args: {
                input: "UpdatePostInput!"
            }
        },
        updatePostFormat: {
            __type: "UpdatePostFormatPayload",
            __args: {
                input: "UpdatePostFormatInput!"
            }
        },
        updateSettings: {
            __type: "UpdateSettingsPayload",
            __args: {
                input: "UpdateSettingsInput!"
            }
        },
        updateTag: {
            __type: "UpdateTagPayload",
            __args: {
                input: "UpdateTagInput!"
            }
        },
        updateUser: {
            __type: "UpdateUserPayload",
            __args: {
                input: "UpdateUserInput!"
            }
        }
    },
    query: {
        __typename: {
            __type: "String!"
        },
        allSettings: {
            __type: "Settings"
        },
        categories: {
            __type: "RootQueryToCategoryConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToCategoryConnectionWhereArgs"
            }
        },
        category: {
            __type: "Category",
            __args: {
                id: "ID!",
                idType: "CategoryIdType"
            }
        },
        comment: {
            __type: "Comment",
            __args: {
                id: "ID!"
            }
        },
        comments: {
            __type: "RootQueryToCommentConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToCommentConnectionWhereArgs"
            }
        },
        contentNode: {
            __type: "ContentNode",
            __args: {
                asPreview: "Boolean",
                contentType: "ContentTypeEnum",
                id: "ID!",
                idType: "ContentNodeIdTypeEnum"
            }
        },
        contentNodes: {
            __type: "RootQueryToContentNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToContentNodeConnectionWhereArgs"
            }
        },
        contentType: {
            __type: "ContentType",
            __args: {
                id: "ID!",
                idType: "ContentTypeIdTypeEnum"
            }
        },
        contentTypes: {
            __type: "RootQueryToContentTypeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        discussionSettings: {
            __type: "DiscussionSettings"
        },
        generalSettings: {
            __type: "GeneralSettings"
        },
        mediaItem: {
            __type: "MediaItem",
            __args: {
                asPreview: "Boolean",
                id: "ID!",
                idType: "MediaItemIdType"
            }
        },
        mediaItemBy: {
            __type: "MediaItem",
            __args: {
                id: "ID",
                mediaItemId: "Int",
                slug: "String",
                uri: "String"
            }
        },
        mediaItems: {
            __type: "RootQueryToMediaItemConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToMediaItemConnectionWhereArgs"
            }
        },
        menu: {
            __type: "Menu",
            __args: {
                id: "ID!",
                idType: "MenuNodeIdTypeEnum"
            }
        },
        menuItem: {
            __type: "MenuItem",
            __args: {
                id: "ID!",
                idType: "MenuItemNodeIdTypeEnum"
            }
        },
        menuItems: {
            __type: "RootQueryToMenuItemConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToMenuItemConnectionWhereArgs"
            }
        },
        menus: {
            __type: "RootQueryToMenuConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToMenuConnectionWhereArgs"
            }
        },
        node: {
            __type: "Node",
            __args: {
                id: "ID"
            }
        },
        nodeByUri: {
            __type: "UniformResourceIdentifiable",
            __args: {
                uri: "String!"
            }
        },
        page: {
            __type: "Page",
            __args: {
                asPreview: "Boolean",
                id: "ID!",
                idType: "PageIdType"
            }
        },
        pageBy: {
            __type: "Page",
            __args: {
                id: "ID",
                pageId: "Int",
                uri: "String"
            }
        },
        pages: {
            __type: "RootQueryToPageConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToPageConnectionWhereArgs"
            }
        },
        plugin: {
            __type: "Plugin",
            __args: {
                id: "ID!"
            }
        },
        plugins: {
            __type: "RootQueryToPluginConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        post: {
            __type: "Post",
            __args: {
                asPreview: "Boolean",
                id: "ID!",
                idType: "PostIdType"
            }
        },
        postBy: {
            __type: "Post",
            __args: {
                id: "ID",
                postId: "Int",
                slug: "String",
                uri: "String"
            }
        },
        postFormat: {
            __type: "PostFormat",
            __args: {
                id: "ID!",
                idType: "PostFormatIdType"
            }
        },
        postFormats: {
            __type: "RootQueryToPostFormatConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToPostFormatConnectionWhereArgs"
            }
        },
        posts: {
            __type: "RootQueryToPostConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToPostConnectionWhereArgs"
            }
        },
        readingSettings: {
            __type: "ReadingSettings"
        },
        registeredScripts: {
            __type: "RootQueryToEnqueuedScriptConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        registeredStylesheets: {
            __type: "RootQueryToEnqueuedStylesheetConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        revisions: {
            __type: "RootQueryToContentRevisionUnionConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToContentRevisionUnionConnectionWhereArgs"
            }
        },
        tag: {
            __type: "Tag",
            __args: {
                id: "ID!",
                idType: "TagIdType"
            }
        },
        tags: {
            __type: "RootQueryToTagConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToTagConnectionWhereArgs"
            }
        },
        taxonomies: {
            __type: "RootQueryToTaxonomyConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        taxonomy: {
            __type: "Taxonomy",
            __args: {
                id: "ID!",
                idType: "TaxonomyIdTypeEnum"
            }
        },
        termNode: {
            __type: "TermNode",
            __args: {
                id: "ID!",
                idType: "TermNodeIdTypeEnum",
                taxonomy: "TaxonomyEnum"
            }
        },
        terms: {
            __type: "RootQueryToTermNodeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToTermNodeConnectionWhereArgs"
            }
        },
        theme: {
            __type: "Theme",
            __args: {
                id: "ID!"
            }
        },
        themes: {
            __type: "RootQueryToThemeConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        user: {
            __type: "User",
            __args: {
                id: "ID!",
                idType: "UserNodeIdTypeEnum"
            }
        },
        userRole: {
            __type: "UserRole",
            __args: {
                id: "ID!"
            }
        },
        userRoles: {
            __type: "RootQueryToUserRoleConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int"
            }
        },
        users: {
            __type: "RootQueryToUserConnection",
            __args: {
                after: "String",
                before: "String",
                first: "Int",
                last: "Int",
                where: "RootQueryToUserConnectionWhereArgs"
            }
        },
        viewer: {
            __type: "User"
        },
        writingSettings: {
            __type: "WritingSettings"
        }
    },
    subscription: {},
    [gqty__WEBPACK_IMPORTED_MODULE_0__.SchemaUnionsKey]: {
        DatabaseIdentifier: [
            "Category",
            "Comment",
            "MediaItem",
            "Menu",
            "MenuItem",
            "Page",
            "Post",
            "PostFormat",
            "Tag",
            "User", 
        ],
        HierarchicalTermNode: [
            "Category"
        ],
        MenuItemLinkable: [
            "Category",
            "Page",
            "Post",
            "Tag"
        ],
        Node: [
            "Category",
            "Comment",
            "CommentAuthor",
            "ContentType",
            "EnqueuedScript",
            "EnqueuedStylesheet",
            "MediaItem",
            "Menu",
            "MenuItem",
            "Page",
            "Plugin",
            "Post",
            "PostFormat",
            "Tag",
            "Taxonomy",
            "Theme",
            "User",
            "UserRole", 
        ],
        TermNode: [
            "Category",
            "PostFormat",
            "Tag"
        ],
        UniformResourceIdentifiable: [
            "Category",
            "ContentType",
            "MediaItem",
            "Page",
            "Post",
            "PostFormat",
            "Tag",
            "User", 
        ],
        Commenter: [
            "CommentAuthor",
            "User"
        ],
        ContentRevisionUnion: [
            "Page",
            "Post"
        ],
        ContentTemplate: [
            "DefaultTemplate",
            "Template_Blank",
            "Template_PageLargeHeader",
            "Template_PageNoSeparators",
            "Template_SinglePostNoSeparators", 
        ],
        EnqueuedAsset: [
            "EnqueuedScript",
            "EnqueuedStylesheet"
        ],
        ContentNode: [
            "MediaItem",
            "Page",
            "Post"
        ],
        HierarchicalContentNode: [
            "MediaItem",
            "Page"
        ],
        NodeWithAuthor: [
            "MediaItem",
            "Page",
            "Post"
        ],
        NodeWithComments: [
            "MediaItem",
            "Page",
            "Post"
        ],
        NodeWithTemplate: [
            "MediaItem",
            "Page",
            "Post"
        ],
        NodeWithTitle: [
            "MediaItem",
            "Page",
            "Post"
        ],
        MenuItemObjectUnion: [
            "Category",
            "Page",
            "Post",
            "Tag"
        ],
        NodeWithContentEditor: [
            "Page",
            "Post"
        ],
        NodeWithFeaturedImage: [
            "Page",
            "Post"
        ],
        NodeWithPageAttributes: [
            "Page"
        ],
        NodeWithRevisions: [
            "Page",
            "Post"
        ],
        NodeWithExcerpt: [
            "Post"
        ],
        NodeWithTrackbacks: [
            "Post"
        ]
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;