"use client";
import { useSession } from "next-auth/react";
import { signIn } from "../../../utils/auth";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
	// const session = useSession();

	// const router = useRouter();

	// if (status === "loading") {
	// 	return <div className={styles.loading}>Loading...</div>;
	// }

	// if (status === "authenticated") {
	// 	router.push("/");
	// }
	// console.log(session);
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div className={styles.socialButton} onClick={() => signIn("google")}>
					Sign in with Google
				</div>
				<div className={styles.socialButton}>Sign in with Github</div>
				<div className={styles.socialButton}>Sign in with Facebook</div>
			</div>
		</div>
	);
};

export default LoginPage;
