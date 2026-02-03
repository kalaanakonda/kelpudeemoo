"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Sparkles, AlertCircle } from "lucide-react";
import {
  simulateRestakingRewards,
  type RestakingSimulationOutput,
} from "@/ai/flows/restaking-simulation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
  ethAmount: z.coerce.number().min(0.01, "Amount must be at least 0.01 ETH."),
  apr: z.coerce.number().min(0, "APR cannot be negative.").max(100, "APR seems too high."),
  periodLengthDays: z.coerce.number().int().min(1, "Period must be at least 1 day."),
});

type FormSchema = z.infer<typeof formSchema>;

export function SimulationSection() {
  const [result, setResult] = useState<RestakingSimulationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ethAmount: 10,
      apr: 2.5,
      periodLengthDays: 365,
    },
  });

  async function onSubmit(values: FormSchema) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const simulationResult = await simulateRestakingRewards(values);
      setResult(simulationResult);
    } catch (e) {
      setError("An error occurred during the simulation. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="simulator" className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-normal font-heading text-black leading-none tracking-tight mb-4">
            Simulate Your Rewards
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed font-light">
            Use our AI-powered simulator to estimate your potential restaking rewards. Adjust the parameters to see how they affect your earnings.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
          <Card className="w-full shadow-lg border-gray-200">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Simulation Parameters</CardTitle>
                  <CardDescription>Enter your desired restaking details.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="ethAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ETH Amount to Restake</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" placeholder="e.g., 10" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="apr"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated APR (%)</FormLabel>
                        <FormControl>
                          <Input type="number" step="0.1" placeholder="e.g., 2.5" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="periodLengthDays"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Restaking Period (days)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 365" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                    {isLoading ? <Loader2 className="animate-spin" /> : "Run Simulation"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </Card>

          <div className="mt-0 md:mt-2 space-y-4">
            <Card className="w-full min-h-[290px] flex flex-col items-center justify-center bg-gray-50 border-dashed border-gray-300">
              <CardContent className="p-6 text-center">
                {isLoading && (
                  <div className="flex flex-col items-center gap-4 text-slate-500">
                    <Loader2 className="w-10 h-10 animate-spin text-primary" />
                    <p className="font-medium">Calculating rewards...</p>
                    <p className="text-sm">Our AI is running the numbers.</p>
                  </div>
                )}
                {!isLoading && !result && !error && (
                  <div className="flex flex-col items-center gap-4 text-slate-400">
                    <Sparkles className="w-10 h-10" />
                    <p className="font-medium">Your results will appear here</p>
                  </div>
                )}
                {result && (
                  <div className="text-center animate-in fade-in duration-500">
                    <p className="text-sm text-slate-500 mb-2">Estimated Rewards</p>
                    <p className="text-6xl font-normal font-heading text-primary tracking-tighter">{result.formattedRewards}</p>
                    <p className="text-sm text-slate-400 mt-4">Over {form.getValues("periodLengthDays")} days, you could earn an estimated <span className="font-normal text-slate-500">{result.estimatedRewards.toFixed(4)} ETH</span>.</p>
                  </div>
                )}
                 {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Simulation Failed</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
            <p className="text-xs text-slate-400 text-center px-4">This simulation is for estimation purposes only and does not guarantee future returns. Actual rewards may vary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
