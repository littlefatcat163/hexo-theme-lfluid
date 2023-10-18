# hexo blog

- [hexo](https://hexo.io/zh-cn/docs/)
- [hexo fluid](https://hexo.fluid-dev.com/docs/guide/)

### 输入法图标

🌟
⭐️⭐️⭐️⭐️
♻️
🟢
👉
👇
☝
⭕️
💰

符号篇
🤍🖤❤️‍🔥💕💞💗💮💯♨️♻️🌐💤🎶✔️💬💭🎴✅❎❌⭕
物体篇
📸📽🎞🕯💸🪙💳⚗️🔭🧺🧼🛋🧸🖼🛍🛒🎀🎐💌📇📰📓📝🔎
旅行与地点篇
🚕🏎🚓🚒🛵🏍🚞🚂🛫🛸🚏🗺🗽🏰🎡🎢🎠⛲️🏝🏜🏔🏗💒⛪️🎑🌌🌠🌃
活动篇
⚾️🎾🏸🪁🏹🛹🛼⛷🏂🪂🏇🏅🎫🎪🩰🎨🎬🎧🎳🎮🧩
食物与饮料篇
🍇🍓🍒🍑🥥🥐🥨🧀🍳🍟🍱🍤🍥🍧🎂🍬🍿🍩🍪🍯☕️🥤🍻🍸🍹🧊
动物与自然篇
🐽🦄🦋🐋🐈🦢🦩🕊🐾🎄🪵🌱🍃🍂🪨🌾🌷🥀🌸🌻🌖🪐✨🌪☁️🌫
表情符号与人物篇
🥰😋😎🥳😤🤗🤔🥱😴🤧🤒👾😽🙀✌🏻🦷👩🏻‍🌾🧑🏻‍🌾👩🏻‍🔬🧑🏻‍🔬👩🏻‍🎨🧑🏻‍🎨👩🏻‍🚀🧑🏻‍🚀🥷🏻🎅🏻🧙🏻‍♀️🧙🏻‍♂️🧝🏻‍♀️🧝🏻🧚🏻‍♀️🧚🏻🧖🏻‍♀️🧖🏻🧶🩴🧦👟👒👛🥽

😆😋🥰🤪🧐🤓🤩😑🤭🤫🤔🤨😟☹️😣😫😩😖😮😤🤬🤯🥶😧🤤🤥🤐🤢🤮🤧🤕🤠🥳🥴🥺😴👤🦋🐢🦐🧸

🍇🍓🍒🍑🥥🍐️🍊️🍈️🍋️🍍️🍉🫐🥭🍋🍎🍏🍌🥝🥑🌾🍠️🍆️🍅🍄🥔🥒🌽🥕🥬🥦🌶️🫑🧅🧄🫒🌰🥜🫘🦑🐙🦞🦐🦀🦪🐟🍖️🍗️🥚🦴🐚🥩🥓🥐🥖🥯🥨🍪🧇🍩🥧🧀🧈🍿🧁🎂🍰️🍞️🥞🍮🥮🍧🍨️🍦️🍫️🍬🍭️🍡️☕️🥤🫗🍻🍸🍹🍶️🍵️🍷️🍺🥃🧋🍼🥛🍾🥂🧃🧉🥫🍯🍟🍤🍕️🍔️🥪🌭️🌮️🌯🥙🥗🧆🍝️🍛️🍣️🍙️🍘️🍢️🍥🥟🍳🍜️🍲️🥘🍱️🍜🫔🥠🫓🍚


## nav link

```
{% navlink url @text %}
```

## tag label
```
{% label primary @primary %}
{% label info @info %}
{% label success @success %}
{% label warning @warning %}
{% label danger @danger %}
```

## font color
```html
{% font info @font %}
{% font info gb b 2 @font %}
```

## multiple img
```md
{% gi %}
![](/img/xx.jpg)
![](/img/xx.jpg)
{% endgi %}
```

## tag
```
{% note primary %}
primary
{% endnote %}

{% note info %}
info
{% endnote %}

{% note success success %}
success, 第二个参数是图标，目前仅支持 info, success, warning, danger
{% endnote %}

{% note warning %}
warning
{% endnote %}

{% note danger %}
danger
{% endnote %}

{% note secondary %}
secondary
{% endnote %}

{% note light %}
light
{% endnote %}
```

## 对话

```html
<article class="the-dialogue">
	<header>
    <h2>
      
    </h2>
  </header>
  <div class="sender" title="your">
    <p>

    </p>
  </div>
  <div class="responder" title="me">
    <p>

    </p>
  </div>
</article>
```