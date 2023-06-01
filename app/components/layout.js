"use client"
import React, { Component } from 'react';
import Header from './Header/page';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}