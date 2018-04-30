/**
 * StringUtil 文字列操作に関するメソッドを集めたクラス
 */
export class StringUtil {
	/**
	 * 全角を半角に直すメソッド カンマはアンダースコアに変換する
	 * & は除く
	 * @param {string} str 変換元文字列
	 * @return {string} 半角文字列
	 */
	public static Zen2Han(str: string): string {
		return str.replace(StringUtil.reZenkaku, char => {
			return String.fromCharCode(char.charCodeAt(0) - 65248);
		}).replace(/[　]/g, " ").replace(/,/g, "_").trim();
	}
	/**
	 * wipeoutSpace 文字列中から半角スペースをすべて削除するメソッド
	 * @param {string} str 変換元文字列
	 * @returns {string} 半角スペースがすべて取り除かれた文字列
	 */
	public static wipeoutAllSpace(str: string): string {
		return str.replace(/ /g, "");
	}
	/**
	 * wipeoutDuplicateSpace 文字列中から連続する半角スペースを単一の半角スペースに変換するメソッド
	 * @param {string} str 変換元文字列
	 * @returns {string} 連続する半角スペースがすべて単一の半角スペースに変換に変換された文字列
	 */
	public static wipeoutDuplicateSpace(str: string): string {
		return str.replace(/\s{2,}/g, " ");
	}
	private static reZenkaku = /[！＃＄％（）＊＋，－．／０-９：；＝？＠Ａ-Ｚ［］＾＿｀ａ-ｚ｛｜｝]/g;
}
