import { View, Text, TextInput } from 'react-native';
import React from 'react';

export default function index({ onChnageText, label }) {
	return <TextInput label={label} onChnageText={onChnageText} />;
}
