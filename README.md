# Novafile-2024 🎗️

[![GitHub stars](https://img.shields.io/github/stars/Shiro-nn/Novafile-2024?style=social)](https://github.com/Shiro-nn/Novafile-2024/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Shiro-nn/Novafile-2024?style=social)](https://github.com/Shiro-nn/Novafile-2024/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Shiro-nn/Novafile-2024)](https://github.com/Shiro-nn/Novafile-2024/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/Shiro-nn/Novafile-2024)](https://github.com/Shiro-nn/Novafile-2024/commits)
[![License: MIT](https://img.shields.io/github/license/Shiro-nn/Novafile-2024)](LICENSE)
[![Status: Archived](https://img.shields.io/badge/status-archived-lightgrey.svg)](https://github.com/Shiro-nn/Novafile-2024)

![Repo Stats](https://github-readme-stats.vercel.app/api/pin/?username=Shiro-nn&repo=Novafile-2024)

> **Novafile-2024** — третья версия ModernFTP (и на момент публикации последняя). Теперь уже на Tauri + Rust + KeepassDB с выгрузкой паролей из оперативной памяти и другими улучшениями безопасности. Но, как и прежде, дальше сырого проекта дело не пошло. 😢 Скорее всего, это последняя версия, и больше за этот проект я браться не буду.

---

## 📂 Состав репозитория


| Файл/Директория            | Описание                                                                                     |
|----------------------------|----------------------------------------------------------------------------------------------|
| **`src-tauri/`**          | Основной код приложения на Rust с использованием Tauri.                                      |
| **`assets/`**             | Статические ресурсы: скрипты (InactiveChecker.ts) и стили (block.css, body.css).            |
| **`components/`**         | Компоненты Vue для интерфейса, включая панель управления (MainPanel.vue).                    |
| **`pages/`**              | Страницы приложения: главная (index.vue), клиент (client.vue), настройки (settings.vue).     |
| **`tauri.conf.json`**     | Конфигурация Tauri: настройки окна, сборки и запуска.                                        |

---

## 🚀 Быстрый старт (локально)

### Установка зависимостей

1. Установите Rust и Tauri:
   - [Rust](https://www.rust-lang.org/tools/install)
   - [Tauri](https://tauri.app/v1/guides/getting-started/prerequisites)

2. Установите Node.js зависимости:
```bash
pnpm install
```

### Клонирование и запуск

```bash
git clone https://github.com/Shiro-nn/Novafile-2024.git
cd Novafile-2024
pnpm dev          # Запуск через Tauri в режиме разработки
```

Приложение стартует на `http://localhost:3000` с интеграцией Tauri.

---

## 🧩 Архитектура проекта

- **Tauri**: Кроссплатформенный GUI на Rust.
- **Rust**: Основной бэкенд для логики и безопасности.
- **KeepassDB**: Управление паролями с выгрузкой из оперативной памяти.
- **Nuxt/Vue**: Фронтенд для интерфейса.

---

## 🛠️ Системные требования

- **Rust 1.77.2+** и `cargo`
- **Node.js 18+** и `pnpm`
- **Tauri CLI 2.1.0+**

---

## 🤝 Вклад

Репозиторий **архивирован**, поэтому PR НЕ принимаются. Для развития проекта — создавайте форк.

---

## ⚖️ Лицензия

Проект распространяется под лицензией **MIT**. Используйте свободно, но без гарантий.

---

## 🔗 Архивы предыдущих версий

1. [**modern-ftp-2023**](https://github.com/Shiro-nn/modern-ftp-2023)
   Описание: 👍🏻 Вторая версия ModernFTP. Всё ещё слабая безопасность и сделано на Electron. Но уже красивый дизайн и более-менее проработанный функционал. Использует Rust (SFTP) + .NET (FTP). В целом не так уж и плохо.

2. [**ftp-manager-2022**](https://github.com/Shiro-nn/ftp-manager-2022)
   Описание: Самая первая версия FTP Manager, примерно из 2022. До релиза не дошла.

> Спасибо за интерес! Надеюсь, этот код вдохновит вас на новые проекты.
