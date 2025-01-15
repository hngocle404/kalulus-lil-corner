---
title: "Renew 'Settings' page UI"
date created: Monday, 13th January 2025, 23:15:33
last modified: Wednesday, 15th January 2025, 18:11:38
area:
  - work
class: doccen
tags:
  - doccen_consumer
---
# Renew 'Settings' page UI

## 1. PIC

|     | **PIC** | **Status**  | **Link**                                                                                                                                           |
| --- | ------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| BA  | Ngoc    | In progress |                                                                                                                                                    |
| UI  | Ngoc    | In progress | [Homepage UI redesign – Figma](https://www.figma.com/design/XORGhdEsGmjO9bo534vUbD/Homepage-UI-redesign?node-id=2423-141&p=f&t=ob0HG9ttwyzoW9cw-0) |

## 2. Feature overview

| **Overview**     | As a Doccen user, I want a streamlined and intuitive settings page, so that I can easily manage my account, membership, and provide feedback. |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| **Key features** | Modular design for settings                                                                                                                   |

## 3. User flow

The user navigates to the 'Settings' page from the app's main menu. From there:

- Users can manage their account (change password, verify, upgrade).
- Access payment history and membership details.
- Provide feedback or access support resources.

## 4. Feature description

#### 1. Account management

| **ID** | **Requirement**                                                                             |
| ------ | ------------------------------------------------------------------------------------------- |
| 1.1    | A button labelled **"Xác thực tài khoản"** links to `https://www.doccen.vn/verify-account`  |
| 1.2    | A button labelled **"Nâng cấp tài khoản"** links to `https://www.doccen.vn/upgrade-account` |
| 1.3    | A button labelled **"Đổi mật khẩu"** links to `https://www.doccen.vn/change-password`       |
| 1.4.   | A button labelled **"Mã QR của tôi"** links to `https://www.doccen.vn/my-qr`                |

![|70%|b](Pasted%20image%2020250114025025.png)

#### 2. Membership and payment

| **ID** | **Requirement**                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------- |
| 2.1    | A button labelled "**Gói Thành viên của tôi**" links to `https://www.doccen.vn/membership`      |
| 2.2    | A button labelled **"Lịch sử thanh toán"** links to `https://www.doccen.vn/transaction-history` |
![[Pasted image 20250114030652.png|centre|b|70%]]

#### 3. Support and feedback

| **ID** | **Requirement**                                                                                                                                                                                                                                                                                                               |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 3.1    | A button labelled "**Trang Hỗ trợ**" expands into a dropdown-like list containing two clickable links:<br>1. "**Gửi email hỗ trợ**: `support@doccen.vn`", which opens the user's email client via `mailto:support@doccen.vn`.<br>2. "**Liên hệ Trang Zalo OA của Doccen**", which navigates to `https://www.zalo.me/doccenvn` |
| 3.2    | A button labelled **"Điều khoản sử dụng"** links to `https://www.doccen.vn/policy`                                                                                                                                                                                                                                            |
| 3.3    | A button labelled **"Khảo sát người dùng"** links to `https://khaosat.me/survey/khao-sat-nguoi-dung-603a1b9`                                                                                                                                                                                                                  |
| 3.4    | A button labelled **"Góp ý ứng dụng"** links to `https://khaosat.me/survey/gop-y-ung-dung-60384fe`                                                                                                                                                                                                                            |
![[Pasted image 20250114030735.png|centre|70%|b]]

## 5. Revision log

| **By** | **Date of change** | **Detail**   |
| ------ | ------------------ | ------------ |
| Ngoc   | 14 Jan 2025        | First update |
