import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{
			icon: Github,
			title: "GitHub",
			link: "https://github.com/jojicoding",
		},
		{
			icon: Linkedin,
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/rohit-shenoy-75a8ab223/",
		},
		{
			icon: Mail,
			title: "Email",
			link: "mailto:rohitshenoy2010@gmail.com",
		},
		{
			icon: Twitter,
			title: "Twitter",
			link: "https://twitter.com/X",
		},
	]

	return (
		<footer className="py-10 bg-background">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-center mb-8">
					<Link href="/" className="text-xl font-bold">
						<span className="font-bold text-[#2dd4bf]">Rohit Shenoy</span>
					</Link>
				</div>

				<div className="flex justify-center space-x-6 mb-8">
					{socialLinks.map((item, index) => (
						<Button
							key={index}
							variant="outline"
							size="icon"
							asChild
							className="text-white hover:text-white active:bg-[#2dd4bf]/20 focus:bg-[#2dd4bf]/20 border border-[#2dd4bf] bg-transparent transition-colors rounded-md"
						>
							<a
								href={item.link}
								target={item.link.startsWith("mailto") ? "_self" : "_blank"}
								rel="noopener noreferrer"
								aria-label={item.title}
							>
								<item.icon className="h-6 w-6" />
							</a>
						</Button>
					))}
				</div>

				<div className="text-center">
					<p className="text-sm text-foreground/70">
						<span className="text-[#2dd4bf]">© {currentYear} Rohit Shenoy</span>
					</p>
				</div>
			</div>
		</footer>
	)
}
