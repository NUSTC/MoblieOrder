# 学食モバイルオーダーシステム (Mobile Order System for Cafeteria)

## 概要
このプロジェクトは 2024 12/7~8 のハッカソンのために作成されたものです。これは学内の学食で簡単にモバイルオーダーを行うことを想定したWebアプリケーションです。学生が学内のレストランのメニューを選択し、デジタル食券を発行して注文を効率化することを目的としています。

## 主な機能
- **レストラン管理**:
  学食内のレストラン情報を登録・表示。
- **メニュー管理**:
  各レストランごとのメニューを表示。
- **デジタル食券発行**:
  決済後に仮想的なデジタル食券を発行。
- **購入履歴の管理**:
  学生が過去に購入した履歴を確認。

## 使用技術
### バックエンド
- **Python** (バージョン3.8以上)
- **Django** (バージョン4.x)
- **Django REST Framework**
- **SQLite** (開発環境で使用)

### フロントエンド
- **React** (別途記載)

## ディレクトリ構造
想定されるディレクトリ構造です。

(For Admin) If you make a change, REWRITE the file directions.

```
project_root/
│
├── backend/               # Djangoプロジェクトのバックエンド部分
│   ├── backend/           # Djangoの設定・メインアプリケーション
│   │   ├── settings.py    # プロジェクト設定ファイル
│   │   ├── urls.py        # ルーティング設定
│   │   ├── wsgi.py        # WSGI設定
│   │   └── asgi.py        # ASGI設定
│   │
│   ├── restaurants/       # レストラン関連のアプリケーション
│   │   ├── models.py      # データベースモデル
│   │   ├── views.py       # APIエンドポイントの実装
│   │   ├── serializers.py # Django REST Frameworkのシリアライザー
│   │   ├── urls.py        # レストラン関連のルーティング
│   │   └── tests.py       # テストコード
│   │
│   ├── menus/             # メニュー関連のアプリケーション
│   │   ├── models.py      # データベースモデル
│   │   ├── views.py       # APIエンドポイントの実装
│   │   ├── serializers.py # Django REST Frameworkのシリアライザー
│   │   ├── urls.py        # メニュー関連のルーティング
│   │   └── tests.py       # テストコード
│   │
│   ├── tickets/           # 食券関連のアプリケーション
│   │   ├── models.py      # データベースモデル
│   │   ├── views.py       # APIエンドポイントの実装
│   │   ├── serializers.py # Django REST Frameworkのシリアライザー
│   │   ├── urls.py        # 食券関連のルーティング
│   │   └── tests.py       # テストコード
│   │
│   ├── db.sqlite3         # SQLiteデータベースファイル（本番環境ではPostgreSQL推奨）
│   └── manage.py          # Djangoプロジェクト管理コマンド
│
├── frontend/              # Reactのフロントエンド部分
│   ├── public/            # 静的ファイル（HTMLテンプレートなど）
│   │   └── index.html     # メインHTMLファイル
│   │
│   ├── src/               # Reactのソースコード
│   │   ├── components/    # Reactの再利用可能なコンポーネント
│   │   │   ├── LoginForm.jsx
│   │   │   ├── RestaurantList.jsx
│   │   │   ├── MenuList.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── DigitalTicket.jsx
│   │   │   └── OrderHistory.jsx
│   │   │
│   │   ├── pages/         # 各画面を構成するページ
│   │   │   ├── LoginPage.jsx
│   │   │   ├── RestaurantPage.jsx
│   │   │   ├── MenuPage.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── TicketPage.jsx
│   │   │   └── HistoryPage.jsx
│   │   │
│   │   ├── services/      # API通信関連（Axiosなど）
│   │   │   ├── api.js     # Djangoバックエンドとの通信ロジック
│   │   │   └── auth.js    # 認証関連のAPI通信ロジック
│   │   │
│   │   ├── App.jsx        # Reactアプリのエントリーポイント
│   │   ├── index.js       # Reactのレンダリングエントリーポイント
│   │   └── styles/        # スタイリング関連
│   │       ├── globals.css
│   │       └── Ticket.css # チケットの切り取りアニメーション用
│   │
│   ├── package.json       # Reactプロジェクトの依存関係とスクリプト
│   └── webpack.config.js  # Webpack設定（必要なら）
│
├── static/                # 静的ファイル（Djangoが収集するReactビルドファイル）
│   ├── css/
│   ├── js/
│   └── images/
│
├── templates/             # Djangoで使用するHTMLテンプレート
│   └── index.html         # Reactのエントリーポイントとして使うテンプレート
│
├── env/                   # 仮想環境（Pythonの依存関係管理用）
│   └── bin/activate       # 仮想環境のアクティベーションスクリプト
│
├── .env                   # 環境変数ファイル（APIキーやデータベース設定）
├── requirements.txt       # Pythonパッケージの依存関係
└── README.md              # このファイル
```

## インストールとセットアップ

### フロントエンド
- **React** (別途記載)
 
### バックエンド

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/MobileOrder.git
   cd <your-repository>

2. **仮想環境のセットアップ (任意)**
   ```bash
   python -m venv env
   source env\Scripts\activate

3. **依存関係のインストール**
    ```bash
    pip install -r requirements.txt
   
4. **データベースのマイグレーション** 
    ```bash
    python manage.py makemigrations
    python manage.py migrate

5. **管理ユーザーの作成**

    ```bash
    python manage.py createsuperuser

6. **開発サーバーの起動**
    ```bash
    python manage.py runserver

7. **管理画面へのアクセス**
- URL: http://localhost:8000/admin/

## データベース構造

以下は、このプロジェクトで想定されるデータベースの主なテーブル構造です。

### **1. User（学生情報）**
| カラム名      | 型              | 説明                     |
|---------------|-----------------|--------------------------|
| id            | Integer         | 主キー                  |
| email         | CharField       | 学生メールアドレス       |
| student_id    | CharField       | 学生証番号              |
| password      | CharField       | ハッシュ化されたパスワード |
| created_at    | DateTimeField   | 登録日時                |

---

### **2. Restaurant（レストラン情報）**
| カラム名      | 型              | 説明                     |
|---------------|-----------------|--------------------------|
| id            | Integer         | 主キー                  |
| name          | CharField       | レストラン名            |
| location      | CharField       | 場所情報（任意）        |
| description   | TextField       | レストランの説明        |

---

### **3. Menu（メニュー情報）**
| カラム名      | 型              | 説明                     |
|---------------|-----------------|--------------------------|
| id            | Integer         | 主キー                  |
| restaurant_id | ForeignKey      | 関連するレストランのID   |
| name          | CharField       | メニュー名              |
| description   | TextField       | 詳細説明（任意）        |
| price         | DecimalField    | 価格                    |
| image         | ImageField      | メニュー画像（任意）    |

---

### **4. Order（注文情報）**
| カラム名      | 型              | 説明                     |
|---------------|-----------------|--------------------------|
| id            | Integer         | 主キー                  |
| user_id       | ForeignKey      | 学生ID                  |
| restaurant_id | ForeignKey      | レストランID            |
| total_price   | DecimalField    | 合計金額                |
| created_at    | DateTimeField   | 注文日時                |

---

### **5. Ticket（デジタル食券）**
| カラム名      | 型              | 説明                     |
|---------------|-----------------|--------------------------|
| id            | Integer         | 主キー                  |
| order_id      | ForeignKey      | 関連する注文ID           |
| status        | CharField       | 未使用（unused）/使用済み（used）|
| created_at    | DateTimeField   | 発行日時                |

---

### API エンドポイント

| HTTPメソッド | エンドポイント            | 機能                            |
|--------------|---------------------------|---------------------------------|
| GET          | `/api/restaurants/`       | 全レストランの一覧を取得         |
| GET          | `/api/restaurants/<id>/`  | 特定のレストランの詳細を取得     |
| POST         | `/api/restaurants/`       | 新しいレストランを登録（予定）  |


### 今後の開発予定
- メニュー管理機能の実装
- デジタル食券のスワイプアニメーションの作成
- Reactフロントエンドとの統合
- 購入履歴管理機能の追加 

### 開発者
- 名前: 
- メール: 