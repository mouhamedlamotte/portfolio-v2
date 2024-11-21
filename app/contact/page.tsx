"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {  Camera, Share, ArrowRight } from "lucide-react";
import Tictactoe from "@/components/tictactoe";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTictactoeLevelStore } from "@/stores/tictactoeLevelStore";
import { Meteors } from "@/components/ui/meteors";
import { useRef } from "react";
import { downloadAsImage } from "@/lib/captureImg";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message envoyé !",
      description: "Merci de m'avoir contacté. Je vous répondrai dès que possible.",
    });
    form.reset();
  }

  const setLevel = useTictactoeLevelStore((state) => state.setLevel);
  const cardRef = useRef<HTMLDivElement>(null);
  return (
    <div className="grid gap-6 md:grid-cols-2 overflow-hidden">
<Card className="relative overflow-hidden" ref={cardRef}>
      <CardHeader className="flex-row justify-between">
        <div className="">
        <CardTitle>TicTacToe</CardTitle>
        <CardDescription>
          Break 🕐 ! Essayes de gagner 🥵😏
        </CardDescription>
        </div>
        <Select defaultValue="1" onValueChange={(value) => setLevel(value as unknown as number)}>
          <SelectTrigger className="w-[180px]" >
            <SelectValue placeholder="Niveau" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1" >Facile 😌</SelectItem>
            <SelectItem value="2" >Impossible 🥵</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="s">
        <Tictactoe />
      </CardContent>
      <CardFooter>
        <p className="text-muted-foreground text-xs">Tu as gagné(e) contre le niveau Impossible ? 🥵 montre moi </p>
        <ArrowRight className="h-4 w-4 ms-3 text-muted-foreground" />
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" className="text-muted-foreground" size="icon" onClick={() => downloadAsImage("png", cardRef, "tictactoe")}>
            <Camera />
          </Button>
          <Button variant="ghost" className="text-muted-foreground" size="icon">
            <Share />
          </Button>
        </div>
      </CardFooter>
      <Meteors number={20} />

    </Card>

      <Card>
        <CardHeader>
          <CardTitle>Formulaire de contact</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Votre message..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Envoyer</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}