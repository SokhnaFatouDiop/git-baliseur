# git-baliseur

Repo d'exercice DAWM.

Modification dans la branche

## En ligne

- Application web : https://senevent-sokhna.vercel.app
- Application Android (APK) : https://expo.dev/artifacts/eas/cwJyiaDzk2ESFfUBjCWL8TRZOX0CcEoikz1_IE9a1xc.apk
- Deploiement continu : chaque merge sur `main` met la production a jour,
  chaque Pull Request recoit une URL de previsualisation.

## Application mobile Android

- Version : 1.0.0 (versionCode 1)
- Identifiant Android : `sn.ucad.senevent.equipe1`
- Build EAS : projet `@sokhna-diop/senevent`, profil `preview` (APK signe)
- Lien de telechargement valable jusqu'au 23 novembre 2026

### Installer l'APK

1. Ouvrir le lien ci-dessus sur le telephone Android.
2. Telecharger le fichier `.apk`.
3. Android demande d'autoriser l'installation depuis cette source : accepter,
   puis installer.
4. Ouvrir SenEvent : le catalogue se charge directement depuis Supabase,
   sans ordinateur et sans Expo Go.

### Lancer l'application en local

```bash
npm install
cd apps/mobile
npx expo start
```

Le terminal affiche un QR code. Le scanner avec Expo Go pour le developpement,
ou lancer `npx expo start --web` pour ouvrir la meme application dans un
navigateur.

Les variables `EXPO_PUBLIC_SUPABASE_URL` et `EXPO_PUBLIC_SUPABASE_ANON_KEY`
doivent etre presentes dans `apps/mobile/.env` en local ; pour les builds EAS,
elles sont declarees dans l'environnement `preview` du projet Expo.

