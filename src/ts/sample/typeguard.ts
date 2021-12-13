import { hasMessage } from "../typeGuard";

//タイプガードサンプル

try {
	throw new Error("hoge");
} catch (error) {
	console.dir(error);
	if (hasMessage(error)) {
		alert(error.message);
	}
}
