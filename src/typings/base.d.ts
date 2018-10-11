// id セクション
// 検索部
export interface id_search {
	"form": string,
	"search": string,
	"reset": string,
	"table": string,//イベント転送用
	"paging": string,//イベント転送用
}
// ページング部
export interface id_paging extends id_search {
	"pagingWrap": string,
	"pagingMisc": string,
	"pagingTemplate": string,
	"pagingTemplateOpen": string,
	"pagingTemplateClose": string,
	"pagingFragmentTemplate": string,
}
// 結果テーブル部
export interface id_search_base extends id_paging {
	"template": string,
}

// 詳細ページ用
export interface id_detail {
	"form": string,
	"commit": string,
	"delete": string,
	"cancel": string,
}

// url 系
//検索・一覧ページ用
export interface url_search {
	"search": string,
}
//詳細ページ用
export interface url_detail {
	"commit": string,
	"cancel": string,
	"delete": string,
}

//jsonobj のインターフェース (ajax で受け取るデータ構造)
export interface json_obj {
	"status": string,
	"message": string,
	"data": any,
}
//jsonobj のインターフェース (ajax で受け取るデータ構造 検索時版)
export interface json_obj_search {
	"status": string,
	"message": string,
	"data": paring_search_result,
}

//pagingSearchResult のインターフェース
export interface paring_search_result {
	"total": number,
	"page": number,
	"perpage": number,
	"totalpage": number,
	"data": any[],
}

export interface pagingNumber {
	"open": number,
	"close": number,
	"hasPrev": boolean,
	"hasNext": boolean,
	"hasPrevSibling": boolean,//直前ページ
	"hasNextSibling": boolean,//直後ページ
}

export interface pagingRequest {
	"page": number
}
