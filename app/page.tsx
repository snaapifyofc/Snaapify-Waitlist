"use client";

import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/logo.png";
import PlatformImage from "@/app/assets/platform.png";
import axios from 'axios'
import {
  Camera,
  ArrowRight,
  Trophy,
  Users,
  Calendar,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    console.log(email);

    setIsLoading(true);
    try {
      const response = await axios.post('/api/users', {name, email, phone: Number(phone), role})

      console.log("The response is :", response);

      toast.success("Successfully joined the waitlist")
      setIsWaitlistOpen(false);

      setName("");
      setEmail("");
      setPhone("");
      setRole("");
    } catch (error: any) {
      toast.error("Something went wrong")
      console.log(error);
      
    } finally{
      setIsLoading(false)
    }
  };

  const handleJoinCommunity = () => {
    window.open("https://chat.whatsapp.com/BZju3qx8Gf8HGvq9Tcoc7D", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={Logo}
                alt="Snappify Logo"
                height={20}
                className="w-auto"
                priority
              />
            </Link>

            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#FF9F12] text-white hover:bg-[#FF9F12]/90">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle className="font-josefin-sans">
                    Join the Waitlist
                  </DialogTitle>
                  <DialogDescription className="font-inter">
                    Be among the first to experience Snaapify. Fill out the form
                    below to join our waitlist.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-josefin-sans">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-josefin-sans">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-josefin-sans">
                      Mobile Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="looking-for" className="font-josefin-sans">
                      I am looking for
                    </Label>
                    <Select
                      value={role}
                      onValueChange={(e) => {
                        setRole(e);
                      }}
                    >
                      <SelectTrigger className="w-full font-inter">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF9F12] text-white hover:bg-[#FF9F12]/90 font-josefin-sans"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      <Toaster/>

      {/* Hero Section */}
      <section className="min-h-[100px] py-12 md:py-20 lg:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center rounded-full border border-orange-100 bg-orange-50 px-4 py-2 mb-8">
            <Trophy className="h-4 w-4 text-[#FF9F12] mr-2" />
            <span className="text-sm font-medium text-[#FF9F12] font-josefin-sans">
              Trusted by 150+ Photographers
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto font-josefin-sans mb-6">
            Join the Future of Photography – Be the First on{" "}
            <span className="text-[#FF9F12]">Snaapify</span>!
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-inter">
            A marketplace where creativity meets opportunity. Connect with
            photographers, book shoots, and explore stunning visuals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-16">
            <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-[#FF9F12] text-white hover:bg-[#FF9F12]/90 h-12 px-8 font-josefin-sans"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white">
                <DialogHeader>
                  <DialogTitle className="font-josefin-sans">
                    Join the Waitlist
                  </DialogTitle>
                  <DialogDescription className="font-inter">
                    Be among the first to experience Snaapify. Fill out the form
                    below to join our waitlist.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-josefin-sans">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      value={name}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-josefin-sans">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-josefin-sans">
                      Mobile Number
                    </Label>
                    <Input
                      id="phone"
                      type="number"
                      value={phone}
                      className="w-full font-inter"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="looking-for" className="font-josefin-sans">
                      I am looking for
                    </Label>
                    <Select
                      value={role}
                      onValueChange={(e) => {
                        setRole(e);
                      }}
                      required
                    >
                      <SelectTrigger className="w-full font-inter">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="service">Service</SelectItem>
                        <SelectItem value="client">Client</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF9F12] text-white hover:bg-[#FF9F12]/90 font-josefin-sans"
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 font-josefin-sans"
              onClick={handleJoinCommunity}
            >
              Join Community
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-5xl mx-auto">
            <Image
              src={PlatformImage}
              alt="Snaapify Platform Preview"
              width={1200}
              height={620}
              className="w-full h-auto rounded-xl shadow-2xl border border-gray-200/50 relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-josefin-sans">
            Why Choose Snaapify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-12 w-12 text-[#FF9F12]" />}
              title="Connect with Talent"
              description="Find the perfect photographer for your project or showcase your skills to potential clients."
            />
            <FeatureCard
              icon={<Calendar className="h-12 w-12 text-[#FF9F12]" />}
              title="Easy Booking"
              description="Streamlined booking process for hassle-free photoshoot scheduling and management."
            />
            <FeatureCard
              icon={<Star className="h-12 w-12 text-[#FF9F12]" />}
              title="Quality Assurance"
              description="Verified professionals and a rating system to ensure high-quality services."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-josefin-sans">
            About Snaapify
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-600 mb-4 font-inter">
              Snaapify is revolutionizing the world of photography by connecting
              talented photographers with clients seeking exceptional visual
              content. Our platform is designed to streamline the entire
              process, from discovery to booking and beyond.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-4 font-inter">
              Founded by a team of photography enthusiasts and tech innovators,
              Snaapify aims to empower photographers to showcase their work and
              grow their businesses while providing clients with easy access to
              top-tier photographic talent.
            </p>
            <p className="text-base md:text-lg text-gray-600 font-inter">
              Join us in shaping the future of photography, where creativity
              knows no bounds and opportunities are just a click away.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-josefin-sans">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-josefin-sans">
                  How does Snaapify work?
                </AccordionTrigger>
                <AccordionContent className="font-inter">
                  Snaapify connects photographers with clients. Photographers
                  can create profiles, showcase their work, and set their
                  availability. Clients can browse portfolios, book sessions,
                  and pay securely through our platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-josefin-sans">
                  Is Snaapify free to use?
                </AccordionTrigger>
                <AccordionContent className="font-inter">
                  Snaapify is free to join and browse. We take a small
                  commission on completed bookings to maintain and improve our
                  platform.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-josefin-sans">
                  How do I join the waitlist?
                </AccordionTrigger>
                <AccordionContent className="font-inter">
                  To join the waitlist, simply click the "Join Waitlist" button
                  at the top of the page and enter your email address. We'll
                  notify you as soon as Snaapify is ready for you to join!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-josefin-sans">
                  What types of photography are supported?
                </AccordionTrigger>
                <AccordionContent className="font-inter">
                  Snaapify supports a wide range of photography types, including
                  but not limited to portrait, wedding, event, commercial,
                  landscape, and fine art photography.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#101319] text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center font-inter text-sm">
            © 2025 Snaapify™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="bg-white p-6 rounded-lg text-center shadow-md">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 font-josefin-sans">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
