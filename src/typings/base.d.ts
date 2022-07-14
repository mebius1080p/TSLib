// id セクション
// 検索部

//jsonobj のインターフェース (ajax で受け取るデータ構造)
export interface json_obj {
	"status": string,
	"message": string,
	"data": any,
}
