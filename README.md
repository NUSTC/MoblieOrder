# 学食モバイルオーダーシステム (Mobile Order System for Cafeteria)

## 概要
このプロジェクトは 2024 12/7~8 のハッカソンのために作成されたものです。これは学内の学食で簡単にモバイルオーダーを行えるWebアプリケーションです。学生が学内のレストランのメニューを選択し、デジタル食券を発行して注文を効率化することを目的としています。

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
```
ここにディレクトリ構造を表示
```

## インストールとセットアップ

### フロントエンド
- **React** (別途記載)
 
### バックエンド

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/MobileOrder.git
   cd <your-repository>

2. **仮想環境のセットアップ**
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