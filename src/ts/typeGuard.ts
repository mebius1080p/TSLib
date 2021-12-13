//主に try-catch で使用する、message の有無を調べるためのタイプガード関数

interface IErrorWithMessage {
	message: string;
}

export function hasMessage(obj: any): obj is IErrorWithMessage {
	return (obj as IErrorWithMessage).message !== undefined;
}
