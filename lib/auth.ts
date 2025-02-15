import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {supabase} from './supabase';

// ✅ Konfigurasi Google Sign-In
GoogleSignin.configure({
  webClientId:
    '368154632146-kje828t8a0o3r2dbpme4ilki67l3g4ca.apps.googleusercontent.com', // Ganti dengan Web Client ID dari Google Cloud Console
  offlineAccess: true, // Memungkinkan refresh token
});

// ✅ Definisi tipe data untuk TypeScript
type GoogleUserInfo = {
  idToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    photo: string;
  };
};

// ✅ Fungsi Login Google dan kirim ke Supabase
export const signInWithGoogle = async (): Promise<GoogleUserInfo | null> => {
  try {
    // 1️⃣ Pastikan Google Play Services tersedia
    await GoogleSignin.hasPlayServices();

    // 2️⃣ Mulai proses sign-in Google
    const userInfo = await GoogleSignin.signIn();
    console.log('🔍 Google Sign-In Response:');

    // 3️⃣ Cek apakah `idToken` ada
    const idToken = userInfo?.idToken;
    if (!idToken) {
      throw new Error('Google Sign-In gagal: Tidak ada ID token.');
    }

    const user = {
      id: userInfo.user.id,
      email: userInfo.user.email,
      name: userInfo.user.name,
      photo: userInfo.user.photo || '',
    };

    // 4️⃣ Kirim ID token ke Supabase
    const {data, error} = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: idToken,
    });

    if (error) {
      throw new Error(`Supabase Auth Error: ${error.message}`);
    }

    console.log('✅ Login berhasil ke Supabase:', data);
    return {idToken, user};
  } catch (error) {
    console.error('❌ Google Sign-In Error:', error);
    return null;
  }
};
