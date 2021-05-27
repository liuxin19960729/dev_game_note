画一个正流边形
```ts
注意 GGraph 的00画图的坐标左上角为00(以你当前 GGraph为坐标系)


	getPoint(index: number, d: number = 1): cc.Vec2 {
		let v = cc.v2(100, 100);
		let len = 100 * d;
		let a = Math.PI / 180;
		switch (index) {
			case 1:
				v.x = v.x + Math.sin(30 * a) * len;
				v.y = v.y - Math.sin(60 * a) * len;
				break;
			case 2:
				v.x = v.x + len;
				break;
			case 3:
				v.x = v.x + Math.sin(30 * a) * len;
				v.y = v.y + Math.sin(60 * a) * len;
				break;
			case 4:
				v.x = v.x - Math.sin(30 * a) * len;
				v.y = v.y + Math.sin(60 * a) * len;
				break;
			case 5:
				v.x = v.x - len;
				break;
			case 6:
				v.x = v.x - Math.sin(30 * a) * len;
				v.y = v.y - Math.sin(60 * a) * len;
				break;
		}
		return v;
	}
```